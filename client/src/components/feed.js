import React, { Component } from 'react'
import axios from 'axios'

export default class feed extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        this.getFeed()
        
    }

    getFeed = async () => {
        try {
            const res = await axios.get('/api/v1/feed/')
            const newState = {...this.state}
            newState.posts = res.data
            this.setState(newState)
            console.log(res.data)
        } catch (error) {
            console.log('---- COULD NOT RETRIEVE FEED DATA ----')
            console.log(error)
            console.log('--------------------------------------')
        }
    }

    render() {
        return (
            <div>
                <h1>Feed Page</h1>
                {this.state.posts.map((v) =>{
                    return (
                        <div>
                            <div>{v.name}</div>
                            <img src={v.photo_url} width="400" />
                            <div>{v.rating}</div>
                            <div>Reviews: {v.reviews.length}</div>
                        </div>)
                })}
            </div>
        )
    }
}
