# CLAUDE.md — Pepe's Blog

## Stack
Next.js 14 App Router, TypeScript, Tailwind, Google Fonts. Deployed on Vercel.

## Structure
```
app/                  # Pages (page.tsx, blog/[slug]/page.tsx, guestbook/page.tsx)
components/layout/    # SiteHeader, SiteFooter, NavBar, SiteSidebar
components/widgets/   # Sidebar widgets (AboutMyPond, SwampConditions, SwampTime, etc.)
components/blog/      # PostCard, PostContent
components/Memphis.tsx # Shared SVG shape components + MemphisCard
lib/posts.ts          # Markdown post loader (getAllPosts, getPostBySlug)
lib/swamp-data.ts     # Static data — edit here to update conditions/music/fly count
content/posts/        # Markdown blog posts
app/globals.css       # CSS variables and base styles
```

## Design
Memphis/pixel aesthetic. Dark swamp green background, geometric accent shapes.

**Fonts:** `Press Start 2P` (`--font-press-start`) for headers/labels, `VT323` (`--font-vt323`) for body text.

**Key CSS variables:**
```
--swamp-bg, --swamp-green, --lily-green
--text-light, --text-dim, --text-bright, --lime-bright
--widget-bg, --widget-header-bg, --border-color
--m-yellow, --m-coral, --m-blue, --m-magenta, --m-orange, --m-ink
```

## Patterns
- Widgets use `.widget-box > .widget-header + .widget-body` or the `<MemphisCard>` component
- Three-column layout via HTML `<table>` in `app/page.tsx` (175px sidebars, fluid centre)
- Memphis shapes live in `Memphis.tsx` — use these for decorative elements, don't inline SVG

## Known issues
- `PostContent.tsx` renders raw markdown string — no parser wired up (`// TODO` comment in file)
- `/blog` route doesn't exist — will 404
- `<marquee>` in `SwampTicker.tsx` is deprecated
- Nav active state breaks on nested routes (`pathname ===` should be `pathname.startsWith`)
- Layout is not responsive (table-based)
- Guestbook form is a placeholder
