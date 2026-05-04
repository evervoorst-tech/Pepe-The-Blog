# CLAUDE.md — Pepe's Blog

Project context and task tracking for Claude. Update this file as tasks are completed.

---

## Project overview

A Next.js 14 (App Router) personal blog for "Pepe the Frog", styled as a retro/Memphis-aesthetic site. Currently has a working blog, guestbook page, and sidebar widgets. A neobrutalist redesign prototype exists as a standalone HTML file but has not been ported to the Next.js app.

**Live site:** (Vercel, URL TBD)
**Repo:** private
**Stack:** Next.js 14 App Router, TypeScript, Tailwind, Firebase (planned for guestbook/dynamic data), Google Fonts

---

## Architecture notes

- `app/` — Next.js App Router pages
- `components/layout/` — SiteHeader, SiteFooter, NavBar, SiteSidebar
- `components/widgets/` — Sidebar widgets (AboutMyPond, SwampConditions, SwampTime, CurrentlyCroaking, PepePortrait, Author, LilyPadMessages, FliesCaught)
- `components/blog/` — PostCard, PostContent
- `components/Memphis.tsx` — Shared SVG shape components (MTriangle, MCircle, MDiamond, MSquiggle, MDots, MZigzag, MStarburst, MTag, MemphisCard)
- `lib/posts.ts` — Markdown post loading (getAllPosts, getPostBySlug)
- `lib/swamp-data.ts` — Static data (flyCount, swampConditions, currentlyCroaking)
- `content/posts/` — Markdown blog post files
- `app/globals.css` — CSS variables and base styles (Memphis palette: swamp greens, Memphis accent colours)

### Fonts

- `Press Start 2P` — pixel font, used for headers/labels (`--font-press-start`)
- `VT323` — retro monospace, used for body text (`--font-vt323`)

### CSS variable palette

```
--swamp-bg, --swamp-green, --lily-green, --mud-brown, --teal
--text-light, --text-dim, --text-bright
--border-color, --widget-bg, --widget-header-bg
--link-color, --link-visited, --lime-bright
--m-yellow, --m-coral, --m-blue, --m-magenta, --m-orange, --m-ink  ← Memphis accents
```

### Key patterns

- Widget layout: `.widget-box` > `.widget-header` + `.widget-body`, or use `<MemphisCard>` component
- Three-column layout via HTML `<table>` in `app/page.tsx` (175px sidebars, fluid centre)
- Blog posts loaded from `content/posts/*.md` at build time via `lib/posts.ts`
- Static data lives in `lib/swamp-data.ts` — edit this file to update conditions/music/fly count

---

## Design direction

### Current: Memphis/pixel (implemented)

Dark swamp green background, Press Start 2P + VT323 fonts, Memphis geometric shapes, retro widget boxes.

### Alternate: Neobrutalist (prototype only — `Neobrutalist_Portfolio.html`)

Cream/black palette, Bricolage Grotesque + Space Mono fonts, thick borders, large offset box-shadows, film grain overlay, live tweaks panel. **Not yet ported to Next.js.**

> ⚠️ **Decision needed:** Commit to one design direction before further component work. Porting the neobrutalist design requires rewriting `globals.css`, all CSS variables, font imports in `layout.tsx`, and restyling all components.

---

## Task backlog

Tasks are grouped by epic and ordered by priority within each group. Check off items as they're completed.

---

### Epic 1 — Design direction

- [ ] **1.1** Decide: keep Memphis/pixel aesthetic OR port neobrutalist prototype
- [ ] **1.2** _(If neobrutalist)_ Update font imports in `layout.tsx` (Bricolage Grotesque, Space Mono)
- [ ] **1.3** _(If neobrutalist)_ Rewrite `globals.css` CSS variables and base styles
- [ ] **1.4** _(If neobrutalist)_ Convert prototype inline styles into component system (replace MemphisCard etc.)

---

### Epic 2 — Content rendering _(Priority: HIGH — broken UX)_

- [ ] **2.1** Add markdown parser — install `next-mdx-remote` or `remark`/`rehype-raw`, wire up in `PostContent.tsx` (currently renders raw pre-wrapped text; has `// TODO: render markdown` comment)
- [ ] **2.2** Add prose styles to `globals.css` for rendered markdown (h1–h3, ul/ol, blockquote, code, hr)
- [ ] **2.3** Create `app/blog/page.tsx` — blog index page listing all posts using `PostCard` (currently navigating to `/blog` would 404; nav links to it)

---

### Epic 3 — Guestbook _(Priority: MEDIUM — feature incomplete)_

- [ ] **3.1** Create Firestore collection `guestbook-entries` with fields: `author`, `message`, `location`, `date`
- [ ] **3.2** Build guestbook form as a client component in `app/guestbook/page.tsx` — name, location, message fields, `addDoc` on submit, success state, basic validation
- [ ] **3.3** Update `LilyPadMessages.tsx` widget to fetch 2 most recent entries from Firestore instead of hardcoded array

---

### Epic 4 — Dynamic widget data _(Priority: LOW — nice to have)_

- [ ] **4.1** `SwampConditions` — decide static (manually edit `swamp-data.ts` + redeploy) vs. dynamic (Firestore doc). If dynamic, add admin update mechanism.
- [ ] **4.2** `CurrentlyCroaking` — same decision as 4.1
- [ ] **4.3** `FliesCaught` — if incrementing visitor count is wanted, implement Firestore counter with rate limiting OR replace with a real analytics integration

---

### Epic 5 — Image assets _(Priority: MEDIUM)_

- [ ] **5.1** Confirm `pepe-header.jpeg` and `pepe-footer.png` are committed to repo and accessible at build time
- [ ] **5.2** Verify Next.js `Image` dimensions are correct for both (currently `width={120} height={140}` for portrait, `width={64} height={64}` for footer)
- [ ] **5.3** Add `alt` text review pass across all `<Image>` usages

---

### Epic 6 — Polish and fixes

- [ ] **6.1** **`<marquee>` deprecation** — replace `SwampTicker.tsx`'s `<marquee>` with a `div` + `overflow: hidden` + CSS `@keyframes` scroll animation. Next.js will warn on this.
- [ ] **6.2** **Active nav highlight on nested routes** — `NavBar.tsx` uses `pathname === item.href`, so `/blog/some-post` doesn't highlight POSTS. Fix: use `pathname.startsWith(item.href)` with a guard for HOME (`pathname === '/'`).
- [ ] **6.3** **Responsive layout** — current three-column layout uses an HTML `<table>`. Breaks on mobile. Replace with CSS Grid and add a breakpoint to collapse sidebars (stack below main content or hide on small screens).
- [ ] **6.4** **Page metadata** — add `generateMetadata` to `app/blog/[slug]/page.tsx` (title = post title, description = excerpt). Add static `metadata` export to blog index page once created.
- [ ] **6.5** **Custom 404** — add `app/not-found.tsx` styled to match the site (widget-box with a "404 — you've fallen into the bog" message).

---

## Files to be aware of

| File                          | Notes                                                                                |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `Neobrutalist_Portfolio.html` | Standalone design prototype — reference only, not part of build                      |
| `tweaks-panel.jsx`            | Reusable live-tweak panel used in the prototype — could be adapted for dev tooling   |
| `design-canvas.jsx`           | Appears to be a corrupted binary file — can be deleted                               |
| `lib/swamp-data.ts`           | Edit this to update conditions, music, fly count (until dynamic data is implemented) |
| `content/posts/`              | Add new `.md` files here to publish posts                                            |

---

## Known issues

- `PostContent.tsx` renders raw markdown string — no parser wired up yet
- `/blog` route does not exist — will 404
- `<marquee>` in `SwampTicker.tsx` is deprecated HTML
- Nav active state breaks on nested routes
- Layout is not responsive (table-based three columns)
- Guestbook form is placeholder only
