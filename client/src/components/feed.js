import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Feed extends Component {
    
    state = {
        items: []
    }

    componentDidMount() {
        this.getFeed()
        console.log(this.props.userName)
    }

    getFeed = async () => {
        try {
            const res = await axios.get('/api/v1/feed/')
            let newState = {...this.state}
            newState.items = res.data
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
                {this.state.items.map((v) =>{
                    return (
                        <Link to={`/item/${v.id}/`}>
                            <div>{v.name}</div>
                            <img src={v.photo_url} width="400" alt=''/>
                            <div>{v.description}</div>
                            <div>Overall Rating: </div>
                            <div>Reviews: {v.reviews.length}</div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
