import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import feed from './components/feed'
import item from './components/item'
import user from './components/user'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={feed}/>
          <Route exact path="/item/:itemId" component={item}/>
          <Route exact path="/user/" component={user}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
