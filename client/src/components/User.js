import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'

export default class User extends Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers()
    }

    getUsers = async () => {
        try {
            const res = await axios.get('/api/v1/user/')
            let newState = {...this.state}
            newState.users = res.data
            this.setState(newState)
            console.log(res.data)
        } catch (error) {
            console.log('---- COULD NOT RETRIEVE USER DATA ----')
            console.log(error)
            console.log('--------------------------------------')
        }
    }

    render() {
        return (
            <div>
                <h1>User Page</h1>
                {this.state.users.map((v) =>{
                    return (
                        <div className="user-card">
                            <div className="user-header">
                                <div className="user-img-container">
                                    <img className="user-img" src={v.photo_url} width="150" alt=''/>
                                </div>
                                <div className="user-header-data">
                                    <div className="user-name">{v.name}</div>
                                    <div className="user-review-count">Contributed Reviews: {v.reviews.length}</div>
                                </div>
                            </div>
                            <div className="user-bio">About Me: {v.bio}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
