// Returns live Google rating / review count / recent reviews for Cairo Café.
// Cached at the CDN for 24h so Places API is hit at most ~1x/day.
// Env vars (set in Netlify): GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID

export default async () => {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!key || !placeId) {
    return Response.json({ error: 'not configured' }, { status: 503 });
  }

  const url = `https://places.googleapis.com/v1/places/${placeId}`;
  const res = await fetch(url, {
    headers: {
      'X-Goog-Api-Key': key,
      'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
    },
  });
  if (!res.ok) {
    return Response.json({ error: 'places api ' + res.status }, { status: 502 });
  }
  const data = await res.json();

  const body = {
    rating: data.rating ?? null,
    count: data.userRatingCount ?? null,
    reviews: (data.reviews || [])
      .filter(r => (r.rating ?? 5) >= 4 && r.text?.text)
      .slice(0, 3)
      .map(r => ({
        author: r.authorAttribution?.displayName || 'Google Guest',
        rating: r.rating,
        text: r.text.text.length > 220 ? r.text.text.slice(0, 217).trimEnd() + '…' : r.text.text,
      })),
  };

  return Response.json(body, {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=172800',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

export const config = { path: '/api/google-reviews' };
