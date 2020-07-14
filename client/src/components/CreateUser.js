import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class CreateUser extends Component {
    
    state = {
        name: '',
        bio: '',
        photo_url:''
    }

    inputChange = (evt) => {
        const newState = { ...this.state }
        newState[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(this.state)
    }

    formSubmit = async (evt) => {
        evt.preventDefault()
        
        try {
           const res = await axios.post('/api/v1/user/', this.state) 
           this.props.setUserStatus(res.data.name, res.data.id)
           console.log(res.data)
        } catch (error) {
            console.log('---- COULD NOT POST NEW USER ----')
            console.log(error)
            console.log('--------------------------------------')
        }
        
    }

    render() {
        return (
            <div>
                { this.props.userName === 'guest' ?
                    <div>
                        <form onSubmit={this.formSubmit}>
                            <div>
                                <label htmlFor="name">Profile Name:</label>
                                <input onChange={this.inputChange} type="text" name="name"/>
                            </div>
                            <div>
                                <label htmlFor="name">About You: (bio)</label>
                                <textarea onChange={this.inputChange} id="bio" name="bio" cols="60" rows="8"></textarea>
                            </div>
                            <div>
                                <label htmlFor="name">Profile Photo (url):</label>
                                <input onChange={this.inputChange} type="text" name="photo_url"/>
                            </div>
                            <div>
                                <input type="submit" value="Submit Profile"/>
                            </div>
                        </form>
                    </div> :
                    <div>
                        <h2>Welcome, {this.props.userName}!</h2>
                        <p>Your profile has been set up!</p>
                        <Link to={"/"}>Click here to return to the Home Page</Link>
                    </div>
                }
            </div>
        )
    }
}
