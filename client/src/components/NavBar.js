import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                
                <Link className="nav-item" to="/">Home Feed</Link>
                
                <Link className="nav-item" to="/user">Users</Link>

                <Link className="nav-item" to="/createuser">Create Profile</Link>
                                
            </div>
        )
    }
}
