# AliHM [![Build Status](https://travis-ci.org/ali92hm/alihm.svg)](https://travis-ci.org/ali92hm/alihm) [![Dependency Status](https://david-dm.org/ali92hm/alihm.svg)](https://david-dm.org/ali92hm/alihm) [![devDependency Status](https://david-dm.org/ali92hm/alihm/dev-status.svg)](https://david-dm.org/ali92hm/alihm#info=devDependencies)
This the personal website of [Ali Hajimirza](http://www.alihm.net).

## Usage
### Install
To use this script clone this repository on your remote server.
```bash
git clone https://github.com/ali92hm/alihm.git && cd alihm
npm install
```
### Execution
To develop frontend with auto refresh
```bash
npm run serve
```

To develop backend with nodemon
```bash
npm run dev
```
To run the project in prod
```bash
npm start
```

To build final product
```bash
npm run build
```

## Dependencies
* [node](http://nodejs.org)
* [npm](https://www.npmjs.com)
* [docker](https://www.docker.com/)(optional)

## Structure
    alihm
    .
    ├── .editorconfig
    ├── .gitignore
    ├── Gruntfile.js                - Grunt configuration
    ├── LICENSE-CC
    ├── package.json                - Used npm packages
    ├── README.md
    ├── node_modules                - Contains npm modules
    ├── server
    │   ├── app.js                  - Starting module of the backend
    │   ├── config                  - Contains application config
    │   └── apis                    - Contains api route handelers
    ├── client                      - Contains the static files
    │   ├── images                  - Contains images
    │   ├── scripts                 - Contains JavaScript files
    │   ├── styles                  - Contains style files {css, scss, sass, less
    │   ├── index.html              - index.html and other html files
    │   ├── humans.txt              - The humans responsible & technology colophon
    │   ├── robots.txt              - Instruction for crawlers [About](www.robotstxt.org/)
    │   └── .server                 - Temporary files that will be used to serve files in development mode
    ├── dist                        - These files will be serve in deployment mode
    └── grunt                       - Grunt configuration and tasks
        ├── config                  - Grunt configuration files for different packages
        │   ├── optimize
        │   ├── server
        │   └── util
        └── tasks                   - Registered grunt tasks
            ├── build.js
            ├── default.js
            ├── serve.js
            └── test.js

## [Potential Bugs](https://github.com/ali92hm/alihm/issues)

## [To do](https://github.com/ali92hm/alihm/milestones)

## License
[Creative Commons license](http://creativecommons.org/licenses/by/4.0/)
