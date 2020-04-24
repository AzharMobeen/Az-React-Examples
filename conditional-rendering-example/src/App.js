import React from 'react';
import logo from './logo.svg';
import './App.css';
import IfElseConditionalRendering from './components/IfElseConditionalRendering';
import ElementVeriableRendering from './components/ElementVeriableRendering';
import TernanyConditionalOperatorRendering from './components/TernanyConditionalOperatorRendering'
import ShortCircuitRendering from './components/ShortCircuitRendering';
import NameListRendering from './components/NameListRendering';
import PersonObjectListRendering from './components/PersonObjectListRendering';

function App() {
  return (
    <div className="App">
      <h3>By Using If/Else conditional Rendering</h3>
      <IfElseConditionalRendering/>
      <br/>
      <h3>By Using Element Veriable Rendering</h3>
      <ElementVeriableRendering/>
      <h3>By Using Ternary conditional operator Rendering</h3>
      <TernanyConditionalOperatorRendering/>
      <h3>By Using Short circuit Rendering</h3>
      <ShortCircuitRendering/>
      <h3>For Array Rendering</h3>
      <NameListRendering/>
      <h3>For Person object Array Rendering</h3>
      <PersonObjectListRendering/>

    </div>
  );
}

export default App;
