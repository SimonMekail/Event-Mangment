import React , { Component } from 'react';
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import GetWeather from './pages/GetWeather';
import CreateEvent from './pages/CreateEvent';
import ShowEvents from './pages/ShowEvents';
import Profile from './pages/Profile';
import AddService from './pages/AddService';
import ShowService from './pages/ShowService';
import AccountVerify from './pages/AccountVerify';
import UsersInfo from './pages/UsersInfo';
import EventsInfo from './pages/EventsInfo';
import CategoryInfo from './pages/CategoryInfo';
import UserRole from './pages/UserRole';
import Category from './pages/Category';
import EventFilter from './pages/EventFilter';
import ForgetPassword from './pages/ForgetPassword';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/weather' component={GetWeather} />
        <Route path='/create' component={CreateEvent} />
        <Route path='/profile' component={Profile} />
        <Route path='/show' component={ShowEvents} />
        <Route path='/usersinfo' component={UsersInfo} />
        <Route path='/userrole' component={UserRole} />
        <Route path='/eventsinfo' component={EventsInfo} />
        <Route path='/categoryinfo' component={CategoryInfo} />
        <Route path='/accountverify' component={AccountVerify} />
        <Route path='/addservice' component={AddService} />
        <Route path='/showservice' component={ShowService} />
        <Route path='/category' component={Category} />
        <Route path='/eventfilter' component={EventFilter} />
        <Route path='/forgetpassword' component={ForgetPassword} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
