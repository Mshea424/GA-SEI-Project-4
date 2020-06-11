import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import feed from './components/feed'
import item from './components/item'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={feed}/>
          <Route exact path="/item/:itemId" component={item}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
