import React from 'react';
import 'antd/dist/antd.css';
import { Switch, Route } from 'react-router-dom';
import Slider from './Sidebar';
import About from './About';
import Transaction from './Transaction';
import Logfile from './Logfile';
import Settings from './Settings';
import Chargepoint from './DataManagement/Chargepoint';
import Reservation from './Reservation';
import User from './DataManagement/Users';
import Dashboard from './Dashboard';

class Home extends React.Component {
      render() {
        return (
            <div>
                <Switch>
                  <Route exact path="/home/dashboard" component={(routeProps) => (
                    <Slider id="1" {...routeProps} content={<Dashboard/>} />
                  )} />
                  <Route exact path="/home/users" component={(routeProps) => (
                    <Slider id="31" {...routeProps} content={<User/>} />
                  )} />
                  <Route exact path="/home/reservations" component={(routeProps) => (
                    <Slider id="2" {...routeProps} content={<Reservation/>} />
                  )} />
                  <Route exact path="/home/chargepoints" component={(routeProps) => (
                    <Slider id="32" {...routeProps} content={<Chargepoint/>} />
                  )} />
                  <Route exact path="/home/settings" component={(routeProps) => (
                    <Slider id="5" {...routeProps} content={<Settings/>} />
                  )} />
                  <Route exact path="/home/logfiles" component={(routeProps) => (
                    <Slider id="6" {...routeProps} content={<Logfile/>} />
                  )} />
                  <Route exact path="/home/transactions" component={(routeProps) => (
                    <Slider id="4" {...routeProps} content={<Transaction/>} />
                  )} />
                  <Route exact path="/home/about" component={(routeProps) => (
                    <Slider id="7" {...routeProps} content={<About/>} />
                  )} />
                  <Route exact path="/home/signout" render={(routeProps) => {
                    routeProps.history.replace('/login');
                  }}/>
                </Switch>
            </div>
        );
      }
 }

 export default Home;
