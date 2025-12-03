# Christophe Trefois - Professional Website

Modern professional website built with [Astro](https://astro.build), showcasing research, publications, and professional activities.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will be available at `http://localhost:4321`

## 🏗️ Project Structure

```
/
├── public/              # Static assets
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro    # Main layout component
│   ├── pages/
│   │   ├── index.astro     # Home page
│   │   ├── about.astro     # About page
│   │   ├── publications.astro
│   │   ├── projects.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css      # Global styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 📝 Content Updates

### Adding/Updating Publications

Edit `src/pages/publications.astro` and add to the appropriate section in the `publications` object.

### Updating Current Role

Edit the placeholder text in `src/pages/index.astro` in the "Current Role" section.

### Adding Projects

Edit `src/pages/projects.astro` and add new project cards to the grid.

## 🎨 Features

- ✅ Modern, responsive design
- ✅ Dark/light mode toggle
- ✅ SEO optimized
- ✅ Fast performance (Astro SSG)
- ✅ Accessible
- ✅ Mobile-friendly

## 🌐 Deployment

This site is configured for GitHub Pages deployment:

```bash
npm run build
```

The built site will be in the `dist/` directory.

### GitHub Pages Setup

1. Push to your repository
2. Go to Settings > Pages
3. Set source to GitHub Actions or the `dist/` folder
4. The site will be available at `https://trefex.github.io`

## 📄 License

© 2025 Christophe Trefois. All rights reserved.

## 🔗 Links

- [ORCID](https://orcid.org/0000-0002-8991-6810)
- [Google Scholar](https://scholar.google.com/citations?user=EBCy7v0AAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/trefoischristophe)
- [GitHub](https://github.com/Trefex)
