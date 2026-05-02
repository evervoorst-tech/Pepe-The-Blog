@AGENTS.md

# CLAUDE.md — Pepe’s Blog

## Project Overview

A retro Web 1.0 / GeoCities-style personal blog written from the perspective of **Pepe the Frog**. Everything is frog-brained, swamp-coded, and pixel-perfect.

-----

## Aesthetic & Theme

- **Era**: Old school internet — GeoCities, early 2000s, Web 1.0 maximalism
- **Visual style**: Pixel art icons only. If a suitable pixel icon doesn’t exist in the project’s `/assets/icons` folder, stop and ask before substituting.
- **Color palette**: Swamp greens, muddy browns, murky teals, and dark backgrounds. Accent with bright lily-pad green.
- **Typography**: Pixel/bitmap fonts only (e.g. Press Start 2P, VT323). No modern sans-serif fonts.
- **Motion**: Marquee text, blinking elements, animated GIFs — embrace the chaos. CSS animations should feel chunky and retro, not smooth or modern.
- **Layout**: Busy, table-based feel. Sidebars, nested boxes, tiled backgrounds. Controlled chaos.

-----

## Voice & Content Perspective

All content is written **from Pepe’s point of view**. Pepe is a philosophical swamp-dwelling frog who blogs about his life.

- Write in first person as Pepe
- Everything is interpreted through a **frog lens**:
  - Weather = how it affects frogs (humidity, fly count, rain = good, sun = suspicious)
  - Music = swamp sounds, croaking playlists
  - Food = flies, mosquitoes, pond algae
  - News = swamp gossip, lily pad politics
  - Mood tracker = Pepe’s emotional state (rare, feels good man, sad, etc.)
- Tone: Dry, deadpan, slightly existential, occasionally very excited about mundane frog things

-----

## Widgets & Components

Every widget must be **frog-themed**. Examples:

|Generic Widget |Pepe Version                                           |
|---------------|-------------------------------------------------------|
|Weather        |Swamp Conditions (humidity %, fly density, rain chance)|
|Now Playing    |Currently Croaking (what Pepe is listening to)         |
|Visitor Counter|Flies Caught So Far                                    |
|Guestbook      |Lily Pad Messages                                      |
|Mood tracker   |Today’s Rare Pepe Level                                |
|Clock          |Swamp Time                                             |
|About Me       |About My Pond                                          |

-----

## Assets

- **Icons**: Pixel art only. All icons live in `/assets/icons/`.
- **Images**: Pixel art or heavily pixelated only. Use `image-rendering: pixelated` in CSS.
- If a required icon is missing, **do not substitute** — ask the user to source one from an open source pixel icon pack.
- Recommended sources: [OpenGameArt](https://opengameart.org), [itch.io free assets](https://itch.io/game-assets/free/tag-pixel-art)

-----

## Technical Notes

- Prefer **HTML/CSS/vanilla JS** to keep the retro feel. Avoid modern framework conventions that leak through into the UI.
- Use CSS `image-rendering: pixelated` on all icons and images.
- `<marquee>` tags are encouraged (yes, really).
- Tiled background images are encouraged.
- Avoid: rounded corners, drop shadows, blur effects, gradients that look modern, smooth transitions, sans-serif fonts.

-----

## Do / Don’t

|Do                         |Don’t                                               |
|---------------------------|----------------------------------------------------|
|Write as Pepe              |Break character                                     |
|Use pixel icons            |Use emoji or SVG icons as substitutes without asking|
|Embrace retro clutter      |Use clean modern layouts                            |
|Ask if an asset is missing |Invent or substitute assets                         |
|Keep everything frog-themed|Use generic widget names or copy                    |