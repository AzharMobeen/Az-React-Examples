import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import GreetES6 from './components/GreetES6';
import WelcomeES6 from './components/WelcomeES6';
function App() {
  return (
    <div className="App">
      <Greet name="Azhar Mobeen">
        <p>Testing props.children keyword in functional components</p>
      </Greet>
      <GreetES6 name="Destructuring" email="test@test.com"/>
      <Welcome name="Azhar Mobeen">
        <p>Testing props.children keyword in Class components</p>
      </Welcome>
      <WelcomeES6 name="Props"></WelcomeES6>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
