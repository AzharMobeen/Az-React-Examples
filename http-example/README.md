In this Project I'll create simple app with child component and discuss about HTTP requests.

#### Environment
* I have dicussed about this in hello-world example, please have a look.

        npm start
* check this [url](http://localhost:3000/) 
### Topics:
* For HTTP request we'll use axios lib.
* Need to install axios:

        npm i axios
* HTTP POST
* HTTP GET
#### Folder Structure details:
* Create Folder components inside src folder
* All the components will be place here.
* `src/components/HttpPOST.js` is for http post example.
* `src/components/HttpGET.js` is for http get example.
* Just need to commit/uncommit component in `App.js` to test both components.
* For testing error handling just change url in  `axios.get` and `axios.post`
#### Details:
* All the input fields should be bind with onChange event.
* And `form` should be bind with onSubmit event handler
#### Notes:
* Next example will be `HTTP example for GET and POST requests`.