import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassEventClick from './components/ClassEventClick';
import EventBinding from './components/EventBinding';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      <FunctionClick></FunctionClick>
      <ClassEventClick></ClassEventClick>
      <br/>
      <EventBinding></EventBinding>
      <br/>
      <ParentComponent></ParentComponent>
    </div>
  );
}

export default App;
