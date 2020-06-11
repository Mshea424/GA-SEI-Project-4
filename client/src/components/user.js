import React, { Component } from 'react'
import axios from 'axios'

export default class user extends Component {
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
            </div>
        )
    }
}
