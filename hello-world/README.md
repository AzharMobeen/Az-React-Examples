In this Project I'll create simple app, modify text and run commands will discuss.

#### Environment
* Just create workspace and run bellow command:

        npx create-react-app hello-world
* hello-world application will be created.
* Now open this hello-world folder in Visual Studio.

* Create new project command:

        npx create-react-app hello-world
* run bellow command from inside hello-world folder:

        npm start
* check this [url](http://localhost:3000/) 
* open file App.js and change text to `Hello World`.
* Check again url browser automatically refreshed.

#### Folder Structure details:
* `package.json:` conatin all the dependencies and scripts to run/build application.
* `node_modules:` all the dependencies are here
* `public/index.html:` in the browser we will server only this file but tipically we'll change anything in this file. in side there is dive with id='root' react is changing contants of this div dynamically.
* `src:` we'll work and development in this folder.
* `App.js:` is the main/parent component that we are serve in the browser.
* `App.css:` is containing styling details.


#### Notes:
* we can create react app via npx and npm as well bellow are the commands:

        npx create-react-app hello-world
        npm install create-react-app hello-world -g

* In first command npx is a npm package runner which will install npm and create app automatically. It will not install npm globally.
* In Second command we are installing and creating app by command and npm will be install globally.