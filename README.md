# jason-lowenthal-hershey.github.io

Personal site for Jason Lowenthal-Hershey — Staff Software Engineer at Codefi.

Live at <https://jason-lowenthal-hershey.github.io>.

## Stack

Vanilla HTML, CSS, and a small splash of JavaScript. No build step. GitHub Pages
serves the repository root directly.

## Layout

```
index.html         — main page
404.html           — friendly not-found page
sitemap.xml        — sitemap for search engines
robots.txt         — crawler directives
.nojekyll          — disable Jekyll processing
assets/
  css/style.css    — all styles, custom properties, dark/light theme
  js/main.js       — theme toggle, mobile nav, scroll-spy, reveal-on-scroll
  img/favicon.svg  — site icon
```

## Local preview

Any static server will do. From the repo root:

```sh
python3 -m http.server 4000
# or
npx serve .
```

Then open <http://localhost:4000>.

## Editing content

Almost everything is plain HTML in `index.html`. The most common edits:

- **Hero copy / title** — `<section id="top">` near the top.
- **Experience** — the `<ol class="timeline">` block.
- **Writing** — the two `.writing-cluster` blocks (Medium and Simple Programmer).
- **Speaking** — the YouTube embed and accompanying copy.
- **Art** — the `.art-grid` cards link out to DeviantArt.
- **Contact** — `<section id="contact">`.

## Theme

Dark by default; light toggle in the header. Theme tokens live at the top of
`assets/css/style.css` under `[data-theme="dark"]` and `[data-theme="light"]`
— change one variable to retheme everything.
