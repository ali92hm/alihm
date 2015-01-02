#AliHM
This is the landing page for Siren Technologies. It has a description about the product, form for emails and subscription to the beta version.

##Usage
###Install
To use this script clone this repository on your remote server.
```bash
git clone https://github.com/A92hm/alihm
npm install
bower install
```
###Execution
To develop
```bash
grunt serve
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
	alihm
	.             
	├── .gitignore                  
	├── Gruntfile.js                - Grunt configuration
	├── package.json                - Used npm packages
	├── bower.json                  - Used bower packages
	├── Gruntfile.js                - Grunt configuration and tasks
	├── README.md
	├── assets                      - Contains the static files
	│   ├── images                  - Contains images
	│	│	└── favicon 			- Favicon {png,ico,jpg} 
	│   ├── js                 		- Contains JavaScript files
	│   ├── styles                  - Contains style files {css, scss, sass, less}
	│   └── index.html              - index.html and other html files
	├── dist                        - These files will be serve in deployment mode (made by running grunt build)
	│   ├── images                  - Contains images
	│	│	└── favicon 			- Favicon {png,ico,jpg} 
	│   ├── js                 		- Contains JavaScript files
	│   ├── styles                  - Contains style files {css, scss, sass, less}
	│   └── index.html              - index.html and other html files
	├── bower_components            - Grunt configuration and tasks
	└── node_modules                - Contains bower modules

##Potential Bugs:
Not known. 


##To do
* Add content.
* Add research page
* Add education page
* Add projects page
* Fix links
* Switch to madrill

##License
[Creative Commons license](http://creativecommons.org/licenses/by/4.0/)
