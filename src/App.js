import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/' render={(routeProps)=>{
          routeProps.history.replace('/login');
        }} />
        <Route path="/home" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
