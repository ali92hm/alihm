# Changelog

## [6.8.1] - 2026-09-28

* Update Twitter/X links to `x.com`
* Upgrade vendored Font Awesome from 4.7.0 to 6.7.2 and swap the landing page's Twitter bird icon for the X logo (`fa-brands fa-x-twitter`)

## [6.8.0] - 2026-09-28

* Add a `/travel` page with a world map (vendored [jsvectormap](https://github.com/themustafaomar/jsvectormap), a jQuery-free fork of [bjornd/jvectormap](https://github.com/bjornd/jvectormap)) color-coded by continent, plus a flag list of visited countries grouped by continent, sourced from `data/travel.yaml`
* Add "Travel" link to the landing page links and the blog navigation

## [6.7.2] - 2026-09-28

* Fix empty `<title>` on every page except blog posts
* Fix "Blog" link on landing page being mislabeled "Github"
* Fix `make clean` not removing `resources/` (typo)
* Fix blog list picking up all site pages instead of just blog pages
* Fix "stroy" typo in initial-commit post (description + tag, now `/tags/story/`)
* Blog posts now use their own front-matter description in `<meta name="description">` instead of the site-wide default
* Only load Font Awesome on the landing page instead of on every page
* Bump `actions/checkout` to v4 and `aws-actions/configure-aws-credentials` to v4
* Pin Hugo version to `0.167.0` in CI instead of `"latest"`
* Deploy the commit that actually passed CI (`workflow_run.head_sha`) instead of `master`'s current tip
* Drop `--acl public-read` from the S3 deploy sync (unsupported on buckets with ACLs disabled by default)

## [6.7.1] - 2026-09-28

* Bump Hugo version to 0.167.0
* Update `peaceiris/actions-hugo` from v2 to v3 in CI workflows
* Replace removed `.Site.RSSLink` and `.Site.DisqusShortname` template fields with their current equivalents
* Rename `languageCode` to `locale` in config.yml per Hugo v0.158.0 deprecation

## [6.7.0] - 2022-10-08

* Ported relevant changes from [hugo-theme-mini](https://github.com/nodejh/hugo-theme-mini/commits/master) up to commit [7f6f395](https://github.com/nodejh/hugo-theme-mini/commit/7f6f395052486d8cc52f768c1519dbe1c93afcd0)
* Bump hugo version to 0.104

## [6.6.1] - 2022-04-23

* Set yml schema for Github workflow files

## [6.6.0] - 2022-04-23

* Remove Google Analytics

## [6.5.0] - 2022-04-17

* Self serve font awesome
* Change landing page to use the same fonts as the blog ('Helvetica Neue', Helvetica, Arial, sans-serif)

## [6.4.0] - 2022-04-09

* Update work bio

## [6.3.2] - 2022-02-10

* Fix setting the `HUGO_ENV` to `production` for production builds.
* This fixes google analytics script not getting injected

## [6.3.1] - 2021-10-18

* Only inject google analytics script in prod
* Fixed a link in readme

## [6.3.0] - 2021-10-18

* Update resume link

## [6.2.0] - 2021-10-17

* Added first blog post
* Added the blog link to the landing page
* Cleaned up bio

## [6.1.1] - 2021-10-15

* Fix license links in readme (CC 4 -> CC3)
* Added attribution clauses

## [6.1.0] - 2021-10-15

* Add all social links

## [6.0.1] - 2021-10-15

* Fixed variable names on the landing page
* Set aws assume role duration to 1h
* Show draft posts in the development server

## [6.0.0] - 2021-10-15

* Migrated the website to Hugo
* Added a static blog
* Removed all npm/js/gulp tools
* Added github actions for CI/CD
* Added vs code settings
