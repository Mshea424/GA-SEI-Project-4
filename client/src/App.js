import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Feed from './components/Feed'
import Item from './components/Item'
import User from './components/User'
import NavBar from'./components/NavBar'
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/" component={Feed}/>
          <Route exact path="/item/:itemId" component={Item}/>
          <Route exact path="/user/" component={User}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
