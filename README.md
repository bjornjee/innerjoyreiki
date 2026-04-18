# InnerJoy Reiki

Website for InnerJoy Reiki — a healing and wellness practice.

Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript.

## Quick Start

```bash
make install
make dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Commands

| Command | Description |
|---------|-------------|
| `make install` | Install dependencies |
| `make dev` | Start development server |
| `make build` | Build for production |
| `make start` | Start production server |
| `make lint` | Run ESLint |
| `make fmt` | Auto-fix lint issues |
| `make test` | Run lint + build checks |
| `make clean` | Remove build artifacts and node_modules |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout (fonts, navbar, footer)
│   ├── page.tsx          # Landing page
│   └── globals.css       # Theme tokens and global styles
├── components/
│   ├── navbar.tsx        # Navigation bar with mobile menu
│   ├── bottom-bar.tsx    # Footer
│   ├── button.tsx        # Pill-shaped button (primary/outline)
│   ├── section-heading.tsx
│   ├── feature-card.tsx
│   ├── service-card.tsx
│   └── sessions-section.tsx  # Scrollable carousel of services
└── lib/
    └── constants.ts      # Site name, nav links, footer links
```
