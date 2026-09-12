# Horizon PM Website

Static marketing website for [Horizon PM](https://github.com/HumanNai/Horizon) — an offline-first, cryptographic, multi-cloud enterprise Product Management desktop application.

## 🌐 Live Site

**[https://horizonpm.app](https://horizonpm.app)** *(custom domain, coming soon)*

GitHub Pages: `https://HumanNai.github.io/horizon-website`

## 📁 Structure

```
├── index.html       # Main landing page (all sections)
├── styles.css       # Full stylesheet (matches app color scheme)
├── script.js        # Vanilla JS (no dependencies)
├── assets/
│   ├── app_icon.png
│   ├── logo.png
│   └── header_logo_dark_bg.png
└── README.md
```

## 🎨 Features

- **SEO optimized** — meta tags, Open Graph, Twitter Card, JSON-LD structured data
- **Fully responsive** — mobile, tablet, desktop
- **App color scheme** — Navy dark (#0B1229), Brand Blue (#2E5EFF), Orange (#F5A623)
- **Animated UI** — scroll-reveal, hero mock app preview, vault animation
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, reduced-motion support
- **No dependencies** — pure HTML/CSS/JS, fast load, no build step

## 🚀 Deploying to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from branch: main / root**
4. Your site will be live at `https://<username>.github.io/<repo>/`

## 🌍 Custom Domain

1. Add a `CNAME` file with your domain (e.g. `horizonpm.app`)
2. Configure DNS:
   - `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` `www` → `<username>.github.io`
3. Enable **Enforce HTTPS** in Settings → Pages

## 📝 License

Apache 2.0 — see [LICENSE](https://github.com/HumanNai/Horizon/blob/main/LICENSE)

