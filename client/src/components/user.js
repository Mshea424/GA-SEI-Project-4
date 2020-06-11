import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
                        <Link to={`/user/${v.id}/`}>
                            <div>{v.name}</div>
                            <img src={v.photo_url} width="400" alt=''/>
                            <div>Contributed Reviews: {v.reviews.length}</div>
                            <div>{v.bio}</div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
