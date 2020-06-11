import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import feed from './components/feed'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Router>
        <Switch>
          <Route exact path="/" component={feed}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
