# AliHM.net Website

![CI Tests] [![CC BY 3.0][cc-by-shield]][cc-by]

This repository contains the code for my personal [website] and [blog].

> This website would not have been possible without the work of [ajlkn] from [html5up.net] (used in landing page) and [nodejh]'s great work on the [hugo-theme-mini] (used for the blog)

## Getting started

### System requirement

- [Hugo] >= 0.88

### Clone the repo

```bash
git clone https://github.com/ali92hm/alihm.git && cd alihm
```

### Development

To run the development serve run the following. The hugo server will watch for file changes
and rebuild the artifacts.

```bash
make serve
# or just
make
```

If you want to see what the end website looks like locally you can run

```bash
make serve-dist
```

### Building

To generate the build artifacts run

```bash
make build
```

### Deployment

The generated static website in the `dist` folder can be served using any static file server. This includes Nginx, Apache, AWS s3, Azure Blob storage etc.


## Issues or questions

If you encounter any problems or have any question, please [file an issue].

## Code of Conduct

Everyone interacting in this project's codebases, issue trackers,
chat rooms, and mailing lists is expected to follow the [CODE_OF_CONDUCT]

## Structure

    alihm
    .
    ├── .editorconfig                - Universal editor configuration
    ├── .gitignore                   - Gitignore file
    ├── CHANGELOG.md                 - CHANGELOG file containing the changes to the project
    ├── CODE_OF_CONDUCT.md           - CODE_OF_CONDUCT file for interacting with this repo
    ├── LICENSE -CC                  - License file (creative commons v4)
    ├── Makefile                     - Makefile containing the common commands for the project
    ├── README.md                    - README file
    ├── config.yml                   - Hugo site configuration file
    ├── .github                      - Folder containing github settings and files
    │   ├── ISSUE_TEMPLATE           - Contains issue templates for bug report and questions
    │   ├── workflows                - Github action workflows for building and deploying the website
    │   └── PULL_REQUEST_TEMPLATE.md - Pull request template
    ├── .vscode                      - Folder containing VSCode settings
    │   ├── extensions.json          - Suggested VSCode extensions for this project
    │   └── settings.json            - VSCode settings for the project
    ├── archetypes                   - Contains Hugo archetypes that templates used when creating new content
    │   └── default.md               - New blog post template
    ├── content                      - Contains Hugo website content files
    │   └── blog                     - Contains blog post files
    ├── data                         - Contains Hugo custom data files
    ├── dist                         - Contains the static website artifacts from build command
    ├── layouts                      - Contains hugo layout (html) files
    │   ├── _default                 - Contains base templates for the project
    │   ├── blog                     - Contains the templates for the blog
    │   ├── partials                 - Contains partial templates that are used by other templates
    │   ├── 404.html                 - 404 page template
    │   └── index.html               - Landing page template
    ├── static                       - Contains hugo static files
    │   ├── images                   - Contains images
    │   └── styles                   - Contains style files {css, scss, sass, less}
    └── scripts                      - Contains utility bash files for building and deploying the project

## License

[Creative Commons license]

[![CC BY 3.0][cc-by-image]][cc-by]

[website]: https://alihm.net
[blog]: https://alihm.net/blog
[Hugo]: https://gohugo.io/getting-started/installing/
[ajlkn]: https://github.com/ajlkn
[html5up.net]: https://html5up.net
[nodejh]: https://github.com/nodejh
[hugo-theme-mini]: https://github.com/nodejh/hugo-theme-mini
[ci tests]: https://github.com/ali92hm/alihm/actions/workflows/build.yml/badge.svg
[CODE_OF_CONDUCT]: ./CODE_OF_CONDUCT.md
[file an issue]: https://github.com/ali92hm/alihm/issues
[creative commons license]: http://creativecommons.org/licenses/by/3.0/
[cc-by]: http://creativecommons.org/licenses/by/3.0/
[cc-by-image]: https://i.creativecommons.org/l/by/3.0/88x31.png
[cc-by-shield]: https://img.shields.io/badge/License-CC%20BY%203.0-lightgrey.svg
