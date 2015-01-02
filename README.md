#Siren Landing Page
This the personal website of Ali Hajimirza.

##Usage
###Install
To use this script clone this repository on your remote server.
```bash
git clone https://github.com/A92hm/siren-landing.git
npm install
bower install
```
###Execution
To develop
```bash
grunt serve
```
To see what the final product looks like
```bash
grunt serve:dist
```
To build final product
```bash
grunt build
```

##Dependencies
* [node](http://nodejs.org)
* [npm](https://www.npmjs.com)
* [bower](https://github.com/bower/bower)
* [grunt](http://gruntjs.com)

##Structure
	siren-landing
	.
	├── .editorconfig                   
	├── .gitignore                  
	├── .yo-rc.json
	├── Gruntfile.js                - Grunt configuration
	├── LICENSE-CC
	├── package.json                - Used npm packages
	├── bower.json                  - Used bower packages
	├── README.md
	├── client                      - Contains the static files
	│   ├── bower_components        - Contains bower modules
	│   ├── images                  - Contains images
	│   │	└──	Favicon   			- Favicon
	│   ├── scripts                 - Contains JavaScript files
	│   ├── styles                  - Contains style files {css, scss, sass, less
	│   ├── index.html              - index.html and other html files
	│   ├── humans.txt              - The humans responsible & technology colophon
	│   ├── robots.txt              - Instruction for crawlers [About](www.robotstxt.org/)
	│   └── .server                 - Temporary files that will be used to serve files in development mode
	│       ├── bower_components
	│       ├── images
	│       ├── scripts
	│       ├── styles
	│       ├── humans.txt
	│       ├── robots.txt
	│       └── index.html
	├── dist                        - These files will be serve in deployment mode
	│   ├── bower_components
	│   ├── images
	│   ├── scripts
	│   │   ├── app.js              - Aggregate of all user written JavaScript
	│   │   └── global.js           - Aggregate of all vendor JavaScript
	│   ├── styles
	│   ├── humans.txt
	│   ├── robots.txt
	│   └── index.html
	├── grunt                       - Grunt configuration and tasks
	│   ├── config                  - Grunt configuration files for different packages
	│   │   ├── compile
	│   │   ├── optimize
	│   │   ├── server
	│   │   └── util
	│   └── tasks                   - Registered grunt tasks
	│       ├── build.js
	│       ├── default.js
	│       ├── serve.js
	│       ├── zip.js
	│       └── test.js
	├── templates                   - Templates of HTML files that should not be served
	└── node_modules                - Contains bower modules

##Potential Bugs:
Not known. 


##To do
* Grunt build config `urgent`
* Add content.
* Add research page
* Add education page
* Add projects page
* Fix links
* sending messages

##License
[Creative Commons license](http://creativecommons.org/licenses/by/4.0/)
