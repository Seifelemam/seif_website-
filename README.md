# Seif Elemam – portfolio website

Plain HTML, CSS and JavaScript. No build step.

## Folder structure
```
index.html          page structure (sections, header, footer, contact details)
legal.html          Impressum + Datenschutz placeholders
css/styles.css      colours, fonts, spacing: edit the tokens at the top of :root
js/content.js       ALL text (EN + DE), experience, projects, skills, routes
js/main.js          rendering, language switch, filters, copy button
assets/             portrait, Pharaohs emblem, CV PDF
```

## Run locally
Open `index.html` in a browser. Or, for a local server: `python3 -m http.server` in this folder, then visit http://localhost:8000.

## Edit
- **Text / new experience / new project / new skill:** copy an entry in `js/content.js`, change it, fill both `en` and `de`.
- **Colours and fonts:** change the tokens at the top of `css/styles.css`.
- **Contact details:** `index.html`, section `#contact`.
- **CV:** replace `assets/Seif_Elemam_CV.pdf`.

## Publish
Upload the whole folder to any static host (Netlify Drop, GitHub Pages, Cloudflare Pages, IONOS, etc.).

## Before going live (Germany)
1. Fill in `legal.html`: Impressum (name, postal address, email) and Datenschutz. Have both checked.
2. Fonts load from Google Fonts, which sends visitors' IP addresses to Google. Self-hosting is safer: download Big Shoulders Display, Public Sans and IBM Plex Mono (e.g. from fontsource), put them in `assets/fonts/`, replace the Google Fonts `<link>` with `@font-face` rules, then update the Datenschutz text.
3. Add a canonical URL and an absolute `og:image` URL in `index.html`.
4. Check the LinkedIn URL and decide whether the CV PDF should be public: it contains your date of birth.
