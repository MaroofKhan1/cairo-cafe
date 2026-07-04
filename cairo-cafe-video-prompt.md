# Cairo Café — AI Video Prompt Pack

Ready-to-paste prompts for Veo 3, Sora, Runway Gen-4, Kling, or Pika. The hero video slot in `index.html` is already wired up: export your favorite result as **`cairo-hero.mp4`**, drop it in the same folder as `index.html`, and it will automatically fade in behind the pyramids animation.

**Business facts baked into these prompts:** Cairo Café · family-owned Egyptian café in Blaine, Minnesota · "Coffee, Crepes & Kunafa" · 100% halal · 4.9★ on Google · warm gold/espresso brand palette · glowing navy storefront sign.

---

## 1. PRIMARY HERO PROMPT — "The Golden Pour" (use this first)

> Cinematic product film, photorealistic, shot on 35mm anamorphic. Golden hour in the Egyptian desert at Giza. In the foreground, close-up on an ornate brass dallah (traditional Arabic coffee pot) held by an unseen hand, pouring a thin, glossy ribbon of dark coffee into a clear glass cup on a rustic wooden table dusted with fine sand. The pour is in crisp slow motion — 120fps feel — with delicate steam curling upward, backlit by the setting sun. Behind the table, softly out of focus, the Great Pyramids of Giza rise against a warm amber-to-violet gradient sky; gentle wind carries drifting sand sparkles through the sunbeams. Rack focus from the coffee stream to the pyramids and back. Warm color grade: deep espresso browns, rich golds (#d4a24e), soft cream highlights. Lighting: low sun flare kissing the rim of the cup, long soft shadows. Camera: slow 15° orbital dolly around the cup, ending in a low hero angle where the full cup sits perfectly aligned between the two largest pyramids. Mood: luxurious, warm, inviting, ancient-meets-modern. No people's faces, no text, no logos. Seamlessly loopable: first and last frame match.
>
> **Audio (Veo 3 / Sora):** soft oud melody over ambient desert wind, the gentle trickle of pouring coffee, one faint distant call of a hawk.

- **Length:** 8s · **Aspect:** 16:9 · **Resolution:** highest available · **Loop:** yes
- **Negative prompt:** text, watermark, logos, human faces, cartoon style, oversaturated colors, camels in foreground, plastic-looking liquid, jitter, morphing hands

---

## 2. VARIANT — "Cairo Nights" (matches the website's dusk palette exactly)

> Cinematic slow-motion scene at blue hour. A copper cezve pours steaming Turkish coffee into a gold-rimmed glass on a dark marble counter. Through a large café window behind it, a stylized skyline of Giza pyramids silhouetted under a deep indigo sky full of stars, with warm string lights bokeh in the foreground glass reflection. Steam rises and briefly swirls into the faint shape of an ankh before dissolving. Color palette: midnight navy (#0e0a06), candle gold (#f0c674), papyrus cream. Slow push-in toward the cup, shallow depth of field, film grain, luxury café commercial aesthetic. No text, no faces. Loopable.

- **Length:** 8s · **Aspect:** 16:9 · Best for: website hero (blends into the dark theme with zero color clash)

---

## 3. VARIANT — "From the Nile to Minnesota" (15s mini-ad for socials)

> A 15-second cinematic sequence in three shots. SHOT 1 (0–5s): sweeping aerial at golden hour over the pyramids of Giza, sand shimmering, warm haze. SHOT 2 (5–10s): match-cut — the triangular pyramid silhouette becomes a slice of golden layered Egyptian feteer pastry being lifted from a wooden board, buttery layers pulling apart in slow motion, honey drizzle catching the light. SHOT 3 (10–15s): overhead table spread in a cozy modern café — kunafa cups with molten cheese pull, chocolate-drizzled crepes with fresh strawberries, an iced caramel latte in a branded cream cup, hands reaching in to share, warm string lights bokeh above. Warm espresso-and-gold grade throughout, joyful family energy, no readable faces.
>
> **Audio:** upbeat modern Egyptian percussion (tabla + darbuka) building to a warm resolve; sizzle and cheese-pull foley in shot 3.

- **Length:** 15s · **Aspect:** 9:16 for Reels/TikTok (also render 16:9) 
- **End card to add in any editor:** "CAIRO CAFÉ — Coffee · Crepes · Kunafa · 772 County Hwy 10 NE, Blaine, MN · Open late · 100% Halal · @cairocafeofficial"

---

## 4. Tips for best results

1. **Generate 3–4 seeds** of prompt #1 and pick the one with the cleanest pour physics — liquid is the hardest part; reject any take where the stream wobbles or the cup morphs.
2. **Ask for "no text"** always — AI-rendered lettering looks garbled; the website already overlays "CAIRO CAFÉ" in crisp HTML type.
3. **Loop trick:** if the model can't loop natively, reverse the clip and append it (pour → hover → pour) in CapCut/Premiere.
4. **File size:** compress to under ~8 MB for the web hero (H.264, 1080p, no audio track needed — the site plays it muted): `ffmpeg -i input.mp4 -an -vcodec libx264 -crf 28 cairo-hero.mp4`
5. **Image-to-video option:** feed the model the café's real night-storefront photo (in the website gallery) as a start frame and prompt: "camera slowly pushes toward the glowing CAIRO CAFÉ storefront at night as fine golden sand particles drift across the frame" — great authentic alternative.
