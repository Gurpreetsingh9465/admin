import React from 'react';
// import logo from './logo.png';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
