import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostList from './components/HttpGET';
import HttpPost from './components/HttpPOST';

function App() {
  return (
    <div className="App">
      {/* <HttpGET/> */}
      <HttpPost/>
    </div>
  );
}

export default App;
