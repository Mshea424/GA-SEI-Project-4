import React, { Component } from 'react'

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

    formSubmit = (evt) => {
        evt.preventDefault()
        const newState = {...this.state}
        newState.redirect = true
        this.props.setUserName(this.state.name)
        this.setState(newState)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formSubmit}>
                    <div>
                        <label htmlFor="name">Nickname:</label>
                        <input onChange={this.inputChange} type="text" name="name"/>
                        <label htmlFor="name">About You:</label>
                        <input onChange={this.inputChange} type="text" name="bio"/>
                        <label htmlFor="name">Submit a link to any photo you'd like to represent you:</label>
                        <input onChange={this.inputChange} type="text" name="photo_url"/>
                    </div>
                    <input type="submit" value="Set this as my nickname"/>
                </form>
                name
                bio
                photo_url
            </div>
        )
    }
}
