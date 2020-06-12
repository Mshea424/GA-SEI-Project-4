import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../App.css'

export default class Feed extends Component {
    
    state = {
        items: []
    }

    componentDidMount() {
        this.getFeed()
        console.log(this.props.userName)
        console.log(this.props.userId)
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
                        <Link className="card-text" to={`/item/${v.id}/`}>
                            <div className="card">
                                <div >{v.name}</div>
                                <img className="card-img" src={v.photo_url} width="400" alt=''/>
                                <div>{v.description.substring(0, 45) + '...'}</div>
                                <div>
                                    <div>Overall Rating: </div>
                                    <div>Reviews: {v.reviews.length}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
