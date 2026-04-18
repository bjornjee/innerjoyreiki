# InnerJoy Reiki

Website for InnerJoy Reiki — a healing and wellness practice. Built with Next.js 16, React 19, Tailwind CSS 4, and TypeScript. Deployed to GitHub Pages.

## Quick Start

```bash
make install
make dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

<details>
<summary><strong>All Commands</strong></summary>

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

</details>

<details>
<summary><strong>Project Structure</strong></summary>

```
src/
├── app/
│   ├── about/            # About page
│   ├── classes/           # Classes page
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── layout.tsx         # Root layout (fonts, navbar, footer)
│   ├── page.tsx           # Landing page
│   └── globals.css        # Theme tokens and global styles
├── components/            # Shared UI components
└── lib/
    └── constants.ts       # Site name, nav links, footer links
```

</details>
