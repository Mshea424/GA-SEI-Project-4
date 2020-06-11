import React, { Component } from 'react'
import axios from 'axios'

export default class item extends Component {

    state = {
        name: '',
        photo_url: '',
        manufacturer: '',
        rating: '',
        vendor_url: '',
        reviews: []
    }

    componentDidMount() {
        this.getItem()
    }

    getItem = async () => {
        try {
            const itemId = this.props.match.params.itemId
            const res = await axios.get(`/api/v1/item/${itemId}/`)
            let newState = {...this.state}
            newState =res.data
            this.setState(newState)
            console.log(res.data)
        } catch (error) {
            console.log('---- COULD NOT RETRIEVE ITEM DATA ----')
            console.log(error)
            console.log('--------------------------------------')
        }
        
    }

    render() {
        return (
            <div>
                <div>
                    <h3>{this.state.name}</h3>
                    <p>{this.state.rating}</p>
                </div>
                <div>
                    <h3>Reviews:</h3>
                    {this.state.reviews.map((v) => {
                        return (
                            <div>
                                <p>{v.rating}</p>
                                <h4>{v.name}</h4>
                                <p>{v.body.substring(0, 10) + '...'}</p>
                                <p>Thumbs up: {v.thumbs.length}</p>
                            </div>
                        )
                    })}
                    
                    
                </div>
            </div>
        )
    }
}
