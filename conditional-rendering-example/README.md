In this Project I'll create simple app with child component and discuss about Conditional Rendering.

#### Environment
* I have dicussed about this in hello-world example, please have a look.

        npm start
* check this [url](http://localhost:3000/) 
### Topics:
* Conditional Rendering in react behave similar as ES6/JS.
* four types:

        1) If/Else
        2) Element Veriables
        3) Ternary conditional Operators
        4) Short circuit operator
* List/Array Rendering by using Array.map()
#### Folder Structure details:
* Create Folder components inside src folder
* All the components will be place here.
* `src/components/IfElseConditionalRendering.js` is for if/else conditional rendering.
* `src/components/ClassEvenClick.js` is for event handler in class component.
* `src/components/EventBinding.js` is for event binding.
* `src/components/ParentComponet.js` is for passing parent method reference to `src/components/ChildComponet.js` as a props.
* calling parent method from child:

        Check greetParent & greetParentHandler method in parent & child Coponent
* calling parent method from child and passing value to it

        Check greetChild & greetChildHandler method in parent & child Coponent
* `src/component/NameListRendering.js` is for List Rendering by Array.map()
* `src/component/PersonObjectListRendering.js` is for Object List Rendering by Array.map()
* We have to use key prop for rendering list else ReactJs will throw error in console.
* A "key" is a unique and special string that we have to include while creating list of elements
* In both  `NameListRendering.js` & `PersonObjectListRendering` key is there.
* Key will help `ReactJs` for stable identify and which item is change from list or removed.  
#### Details:
* If else only used for funtional calls and object constructions

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