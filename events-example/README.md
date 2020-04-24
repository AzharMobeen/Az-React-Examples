In this Project I'll create simple app with child component and discuss about Events.

#### Environment
* I have dicussed about this in hello-world example, please have a look.

        npm start
* check this [url](http://localhost:3000/) 
### Topics:
* Event handling (in both Functional component and Class Component)
* Different ways for Event binding
* Parrent to child componet communication as referece to the child

#### Folder Structure details:
* Create Folder components inside src folder
* All the components will be place here.
* `src/components/FunctionClick` is for event handler in functional component.
* `src/components/ClassEvenClick.js` is for event handler in class component.
* `src/components/EventBinding.js` is for event binding.
* `src/components/ParentComponet.js` is for passing parent method reference to `src/components/ChildComponet.js` as a props.
* calling parent method from child:

        Check greetParent & greetParentHandler method in parent & child Coponent
* calling parent method from child and passing value to it

        Check greetChild & greetChildHandler method in parent & child Coponent


#### Details:
* All the events are camelCase.

        <button onClick={this.clickHandler}>
* And must be passed as event not string like above code
* if we use bellow code then function called at loading time. so don't use `()`
        
        wrong: <button onClick={clickHandler()}>Click</button>
        right: <button onClick={clickHandler}>Click</button>

* Don't use function keyword for class component funtions use like bellow code:

         clickHandler() {
                console.log("clickHandler called from class component")
        }
* React needs Event binding else undefined error comes, bellow are differnt way:
* First approch is not good for performance:
        
        <button onClick={this.clickHandler.bind(this)}>EventBinding</button>
* Second approch to use aero funtion but this also have performance issue in big apps:

        <button onClick={() => this.clickHandler()}>EventBinding</button>
* Thir and official approch (binding in constructor):

        this.clickHandler = this.clickHandler.bind(this);
* Fourth approch (user aero funtion with defined function)
        
        clickHandler = () => {
                this.setState ({
                message: "this is second message"
                })
        }


#### Notes:
* Next example will be `Conditional Rendering Example`.