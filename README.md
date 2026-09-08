# jared2183.github.io

My personal website: selected projects, background, and experience.

Plain HTML, CSS, and a few lines of JavaScript. No build step, no framework.

```
index.html                  home page (work, about, experience)
portfolio-html/*.html       one page per project
assets/css/site.css         all styles (design tokens at the top)
assets/js/site.js           header state, scroll reveal, footer year
assets/img/                 photos, resized to at most 1800 px wide
```

To preview locally, open `index.html` in a browser or run any static server, for example:

```
python3 -m http.server 8000
```

## Adding a project

1. Add photos under `assets/img/portfolio/<project>/` (keep them under ~2000 px on the long edge).
2. Copy one of the pages in `portfolio-html/` and update the title, meta, gallery, and prose.
3. Add a card for it in the `#work` grid in `index.html`, and update the previous/next links at the bottom of the neighbouring project pages.
