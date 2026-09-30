# CLAUDE.md

## What this is

The source for <https://alihm.net> — Ali Hajimirza's personal site. It is a
[Hugo](https://gohugo.io) static site with two distinct visual halves:

- **Landing page** (`/`) — a single-page card, adapted from an [html5up.net](https://html5up.net)
  template by [ajlkn](https://github.com/ajlkn). Styled by `static/css/landing.css`.
- **Blog** (`/blog`, `/tags`) — adapted from [hugo-theme-mini](https://github.com/nodejh/hugo-theme-mini)
  by [nodejh](https://github.com/nodejh). Styled by `static/css/blog.css`.

There is no Hugo theme module or submodule; the theme code was vendored into
`layouts/` and `static/` and is maintained by hand. Upstream changes are ported
manually (see the 6.7.0 entry in `CHANGELOG.md` for how that is recorded).

No JS build, no npm, no package.json. Hugo is the only required tool. Third-party
assets (Font Awesome, jsvectormap, KaTeX) are loaded from CDNs, not vendored.

## Commands

```bash
make            # == make serve
make serve      # hugo server --buildDrafts (live reload, drafts visible)
make build      # ./scripts/build.sh -> minified production build into ./dist
make serve-dist # clean + build + python http.server over ./dist
make clean      # remove ./dist
make deploy     # aws s3 sync ./dist s3://alihm.net --delete
```

Requires Hugo >= 0.167.0 (extended not required — no SCSS/Sass in the tree).
`scripts/include/vars.sh` holds shared shell variables (`DIST_DIR`).

`scripts/build.sh` sets `HUGO_ENV=production`, which is what flips the
`robots` meta tag from `NOINDEX` to `INDEX` in `layouts/partials/head.html`.
Any build that does not go through `make build` produces a **noindex** site.

## Layout of the repo

```
config.yml                     Hugo site config; all copy/links live in params
content/blog/*.md              blog posts (front matter per archetypes/default.md)
archetypes/default.md          template for `hugo new blog/<slug>.md`
layouts/
  index.html                   landing page — standalone, does NOT use baseof.html
  404.html                     uses baseof.html
  _default/baseof.html         shell for everything except the landing page
  _default/taxonomy.html       /tags/<tag> listing, grouped by year
  _default/terms.html          /tags index
  _default/_markup/render-*    Goldmark hooks (links open in new tab, heading anchors, image wrapper)
  blog/list.html               /blog index, paginated
  blog/single.html             blog post
  partials/
    head.html                  meta, robots, css, opengraph/twitter cards, RSS
    navigation.html social.html profile.html footer.html
    toc.html                   collapsible ToC, hidden when empty
    comment.html               Disqus, only renders if services.disqus.shortname is set (currently unset)
    math.html                  KaTeX via CDN; opt in per page with `math: true` in front matter
    svgs/*.svg                 templated SVGs — called as partials with (dict "fill" .. "width" .. "height" ..)
static/
  css/{landing,blog,ie8,ie9,noscript}.css
  images/                      avatar, landing background, favicon, per-post images
scripts/{build,clean,deploy}.sh
.github/workflows/{build,release}.yml
```

`dist/` and `resources/` are build output and gitignored.

## Conventions

- **Never hardcode copy or links in templates.** Text, bio lines, social URLs,
  404 strings, and the resume link all live under `params:` in `config.yml`.
- The SVG partials read `.fill`, `.width`, `.height` from a dict — pass all three.
- `.editorconfig` governs formatting: 4-space indent, 2 for yaml/css, LF, final newline.
- Post front matter: `title`, `description`, `date`, `tags`, `draft`, `images`
  (`images` feeds Open Graph). Permalinks are `blog/:title/`.
- Blog images live in `static/images/blog/<post-slug>/` and are referenced with
  an absolute path (`/images/blog/<slug>/<file>.jpg`).
- `CHANGELOG.md` is kept by hand, newest first, `## [x.y.z] - YYYY-MM-DD` with
  bullet points. Releases are also git-tagged (`vX.Y.Z`). **Bump it with any
  user-visible change.**

## CI/CD

- `build.yml` — on push to `master` and on PRs: sets up Hugo, runs `make build`.
  It only proves the site compiles; there are no tests, no linting, no link check.
- `release.yml` — triggered by a *successful* `build` workflow run on `master`
  (`workflow_run`), assumes an AWS role from repo secrets, rebuilds, and
  `make deploy`s to the `alihm.net` S3 bucket in `us-west-2`.

Deploys happen automatically on merge to `master`. There is no staging
environment and no rollback step beyond reverting and re-merging.
