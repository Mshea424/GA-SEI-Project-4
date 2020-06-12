import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

export default class NavBar extends Component {
    render() {
        return (
            <div>
                
                <Link to="/">Home Feed</Link>
                
                <Link to="/user">Users</Link>

                <Link to="/createuser">Create Profile</Link>
                                
            </div>
        )
    }
}
