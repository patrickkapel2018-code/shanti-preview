# Shanti — website remake

Moderne remake van [shanti.nl](https://www.shanti.nl/) met behoud van alle originele foto's, video's, teksten, het logo en de merkkleuren (crème `#F8F2EC`, diepgroen `#254719`, goud uit het logo).

## Structuur

```
index.html            Home (met Vimeo-achtergrondvideo in de hero)
9d-ademsessies.html   9D Ademsessies (incl. de 9 D's, stappen, FAQ)
shibari.html          Shibari Healing
bufo.html             Bufo Alvarius (incl. YouTube-video)
retraite.html         Retraite op maat
over-ons.html         Over ons
samenwerken.html      Samenwerken
contact.html          Contact (incl. Google Maps)
faq.html              Veelgestelde vragen
assets/css/style.css  Volledig design system
assets/js/main.js     Navigatie, scroll-reveal, accordion, hero-animatie
assets/img/           Alle originele foto's, iconen en het logo (lokaal gedownload)
assets/docs/          Algemene voorwaarden (PDF)
```

## Lokaal bekijken

Pure statische site — geen build stap nodig:

```bash
python3 -m http.server 8741
# open http://localhost:8741
```

Direct openen van `index.html` in de browser werkt ook, maar via een lokale server laden de video-embeds betrouwbaarder.

## Technisch

- Geen frameworks of dependencies; alleen HTML, CSS en vanilla JS.
- Fonts: Fraunces + Manrope via Google Fonts.
- Video's blijven embeds van de originele bronnen (Vimeo `908644415`, YouTube `TwU4CAtgY8I` en `LW7qGHDhkZg`). Op mobiel wordt de achtergrondvideo vervangen door een foto (databesparing).
- Scroll-animaties via IntersectionObserver, met respect voor `prefers-reduced-motion`.
- Deploybaar op elke statische host (Netlify, Vercel, Cloudflare Pages, gewone webhosting).
