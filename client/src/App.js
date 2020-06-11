import React, { Component } from 'react'
import './App.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Feed from './components/Feed'
import Item from './components/Item'
import User from './components/User'
import NavBar from './components/NavBar'
import CreateUser from './components/CreateUser'
export default class App extends Component {
  state = {
    userName: 'guest',
    userId: null
  }

  setUserStatus = (userName, userId) => {
    const newState = { ...this.state }
    newState.userName = userName
    newState.userId =  userId
    this.setState(newState)
  }

  getCreateUser = () => {
    return (<CreateUser setUserStatus = {this.setUserStatus} userName = {this.state.userName} userId = {this.state.userId}/>)
  }

  getFeed = () => {
    return (<Feed userName = {this.state.userName} userId = {this.state.userId} />) 
  }

  getItem = (routerProps) => {
    return (<Item userName={this.state.userName} userId = {this.state.userId} {...routerProps}/>)
  
  }

  componentDidMount() {
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={this.getFeed}/>
            <Route exact path="/item/:itemId" component={this.getItem}/>
            <Route exact path="/user/" component={User}/>
            <Route exact path="/createuser/" component={this.getCreateUser}/>
          </Switch>
        </Router>
      </div>
    );
  }
}