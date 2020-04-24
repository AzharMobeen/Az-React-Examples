In this Project I'll create simple app with child component and discuss about components.

#### Environment
* I have dicussed about this in hello-world example, please have a look.

        npm start
* check this [url](http://localhost:3000/) 
### Topics:
* Components (both Functional component and Class Component)
* Destructuring
* Props VS State
* counter & message example for changing props and state
#### Folder Structure details:
* Create Folder components inside src folder
* All the components will be place here.
* `src/components/Greet.js` is a functional Component.
* `src/components/Welcome.js` is a class component.
* `src/components/GreetES6.js` for Destructuring in functional component
* `src/components/WelcomeES6.js` for Destructuring in class component for both props & state
* `src/components/Message.js` for function calling and change state in class component
* `src/components/Counter.js` for increament function in class component

#### Details:
* For Component we have to export from component.js and need to import where we want to use that component.
* For import and export no need to put extension as well.
* I have write in funtions in both normal javascript and ES6 way as well.

* There are two types of Components:
##### Functional Components (Stateless ):
* They are JavaScript Functions and optionaly received object props
* They take input of properties as props
* And return html known as JSX (JavaScript XML)

        function welcome(props) {
                return <h1> functional Component {props.someField} </h1>;
        }
* Examples:
* `export default Great` which means we can import this component with anyName.
* if it's default export like above then we can use any tag name insted of Great `import Great from './components/Great'` like this `import MyGreat from './components/Great'`
* Name Export:

        export const Greet = (props) => <h1>Hello {props.name} From Functional Component</h1>
* Name Import: 

        import {Greet} from './components/Greet';
##### Class Components (Stateful) [introduce in ES6]
* Basically it's EA6 classes
* Can optionally accept props like functional component and return JSX.
* And `this.props` are resorved for class commponents
* They must contain render method that return html known as JSX (JavaScript XML)

        class Welcome extends React.Component {

                render () {
                        return ( 
                        <div>
                                <h1>Hello {this.props.name} From Simple class Component</h1>
                                {this.props.children}
                        </div>
                        )
                }
        }
* Open `App.js` check it's class componet and it's contain render methods.
* We can have as much as required components in app.
* We can reuse component in each other as well.

#### Props Vs State:
|props | state|
|are immutable (means values will not change) |state are mutable|
|get passed to the component|manage within the component|
|function parameter|Variables decleared in the function body|
|accessable by props in functional component |accessable by Hook in functional component|
|accessable by this.props in class component| accessable by this.state in class component|
#### Notes:
