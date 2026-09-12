# Horizon PM Website

Static marketing website for [Horizon PM](https://github.com/HumanNai/Horizon) — an offline-first, cryptographic, multi-cloud **product management platform** for teams and individuals.

## 🌐 Live Site

**[https://horizon.humannai.in](https://horizon.humannai.in)**

GitHub Repository: [github.com/HumanNai/Horizon-website](https://github.com/HumanNai/Horizon-website)

## 📁 Structure

```
├── index.html       # Main landing page (all sections)
├── styles.css       # Full stylesheet (matches app color scheme)
├── script.js        # Vanilla JS (no dependencies)
├── CNAME            # Custom domain: horizon.humannai.in
├── robots.txt       # SEO crawler config
├── sitemap.xml      # XML sitemap for search engines
├── assets/
│   ├── app_icon.png
│   ├── logo.png
│   └── header_logo_dark_bg.png
└── README.md
```

## 🎨 Features

- **SEO optimized** — meta tags, Open Graph, Twitter Card, JSON-LD structured data
- **Fully responsive** — mobile, tablet, desktop
- **App color scheme** — Navy dark (`#0B1229`), Brand Blue (`#2E5EFF`), Orange (`#F5A623`)
- **Animated UI** — scroll-reveal, hero mock app preview, vault animation
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, reduced-motion support
- **No dependencies** — pure HTML/CSS/JS, fast load, no build step

## 🚀 Deploying to GitHub Pages

This site is deployed via **GitHub Pages** from the `main` branch root.

- **Pages Settings:** Settings → Pages → Deploy from branch: `main` / `/ (root)`
- **Custom Domain:** `horizon.humannai.in` (configured via `CNAME` file)
- **HTTPS:** Enforced automatically by GitHub Pages

## 🌍 DNS Configuration

DNS records for `humannai.in`:

| Type | Name | Value |
|------|------|-------|
| `A` | `horizon` | `185.199.108.153` |
| `A` | `horizon` | `185.199.109.153` |
| `A` | `horizon` | `185.199.110.153` |
| `A` | `horizon` | `185.199.111.153` |

## 📝 License

Apache 2.0 — see [LICENSE](https://github.com/HumanNai/Horizon/blob/main/LICENSE)
