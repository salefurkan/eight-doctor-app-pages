# eight-doctor-app-pages

Marketing and legal static pages for **8 Doktor** (GitHub Pages).

## Live URLs

After enabling **GitHub Pages** (Settings → Pages → Source: `main` / root):

| Page | URL |
|------|-----|
| Home | `https://salefurkan.github.io/eight-doctor-app-pages/` |
| Privacy | `https://salefurkan.github.io/eight-doctor-app-pages/privacy.html` |
| Terms | `https://salefurkan.github.io/eight-doctor-app-pages/terms.html` |
| Support | `https://salefurkan.github.io/eight-doctor-app-pages/support.html` |

Update `AppLegalConfiguration.legalBaseURL` in the iOS app to match this base URL.

## Files

- `index.html` — marketing landing
- `privacy.html` — privacy policy (EN + TR)
- `terms.html` — terms of use (EN + TR)
- `support.html` — support / FAQ
- `css/site.css` — shared styles
- `js/lang.js` — EN/TR language switcher (browser default + `localStorage`)

## Language

Use the **EN / TR** toggle in the page header. The choice is saved in the browser and applied across all pages. Turkish browsers default to TR; others default to EN. You can also force a language with `?lang=tr` or `?lang=en` on any page URL.
