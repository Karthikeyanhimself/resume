# Portfolio Website

A minimal, high-performance personal portfolio website built with plain **HTML, CSS, and JavaScript**. Designed for clarity, typography-driven layout, and performance without frameworks.

## Overview
This project is a static portfolio showcasing engineering projects, technical skills, education, and achievements. It emphasizes clean architecture, fast load times, and modern UI patterns using native web APIs.

## Tech Stack
- **HTML5** — Semantic structure and SEO metadata
- **CSS3** — Custom design system, responsive grid, scroll animations
- **Vanilla JavaScript** — Clock, interaction control, and intersection-based animations

No frameworks. No build tools. No dependencies.

## Features
- Responsive two-column layout with sticky sidebar
- Typography-focused design using Google Fonts
- Scroll reveal animations via `IntersectionObserver`
- Live IST (Indian Standard Time) clock
- Right-click protection (selectively allowed on profile links)
- SEO + Open Graph + Twitter metadata
- Fully static and deployable on any CDN

## File Structure
```
.
├── index.html    
├── style.css     
├── script.js     
└── favicon.ico   
```

## How It Works
### index.html
- Defines layout, sections, and content
- Includes SEO, Open Graph, and social metadata
- Loads styles and scripts directly (no bundling)

### style.css
- Uses CSS variables as design tokens
- Implements responsive grid and typography scale
- Handles scroll reveal transitions

### script.js
- Updates live IST clock every second
- Injects current year dynamically
- Blocks right-click except on contact/profile links
- Triggers reveal animations using `IntersectionObserver`

## Running Locally
No setup required.

```bash
# Option 1: Open directly
open index.html

# Option 2: Simple local server
python -m http.server
```

## Deployment
Can be deployed directly to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting/CDN

No environment variables or build steps needed.

## Design Philosophy
- Performance over abstraction
- Native browser APIs over libraries
- Readable typography over heavy visuals
- Minimal JavaScript, maximum intent

## License
Personal portfolio project. Reuse structure with attribution. Content is proprietary.

