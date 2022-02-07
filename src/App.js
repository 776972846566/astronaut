import React, { Component } from 'react';
import {BrowserRouter as Router, Route,Redirect} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home/home.js';
import Play from './components/pages/play/Play.js';

import List from './components/pages/list/List.js';

import Submit from './components/pages/submit/Submit.js';


const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route {...rest} render={(props) => (
	  localStorage.getItem('ACCESS_ID') != null ? <Redirect to='/' /> : <Component {...props} />
	)} />
  )
class App extends Component {

  render() {
    return (
	<Router>
		<div>				
			<Route exact path="/" name="Home Page" component = {Home} />
			<Route exact path="/play" name="Play Page" component = {Play} />
			<Route exact path="/list" name="List Page" component = {List} />
			<Route exact path="/submit" name="Submit Page" component = {Submit} />
		</div>
	</Router>
    );
  }
}

export default App;
