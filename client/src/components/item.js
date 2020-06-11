import React, { Component } from 'react'
import axios from 'axios'

export default class Item extends Component {

    state = {
        name: '',
        photo_url: '',
        manufacturer: '',
        description: '',
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
            newState = res.data
            this.setState(newState)
            console.log(res.data)
            this.getTotalRating()
        } catch (error) {
            console.log('---- COULD NOT RETRIEVE ITEM DATA ----')
            console.log(error)
            console.log('--------------------------------------')
        }    
    }

    getTotalRating = () => {
        let newState = {...this.state}
        let ratingSum = 0
        let reviewSum = newState.reviews.length
        console.log(reviewSum)
        for (let i = 0; i < reviewSum; i++) {
            let ratingNum = Number(newState.reviews[i].rating)
            console.log(ratingNum)
            ratingSum += ratingNum
        }
        console.log(ratingSum)
        let ratingAverage = (ratingSum / reviewSum)
        console.log(ratingAverage)
        let totalRating = 0 
        if (ratingAverage >= 4.5) {
            totalRating = 5
        } else if (ratingAverage < 4.5 && ratingAverage >= 3.5) {
            totalRating = 4
        } else if (ratingAverage < 3.5 && ratingAverage >= 2.5) {
            totalRating = 3
        } else if (ratingAverage < 2.5 && ratingAverage >= 1.5) {
            totalRating = 2
        } else {
            totalRating = 1
        }
        newState.totalRating = totalRating
        this.setState(newState)
        console.log(this.state.totalRating)
    }

    render() {
        return (
            <div>
                <div>
                    <h3>{this.state.name}</h3>
                    <img src={this.state.photo_url} />
                    <p>Overall Rating: {this.state.totalRating}</p>
                    <p>{this.state.description}</p>
                </div>
                <div>
                    <h3>Reviews:</h3>
                    {this.state.reviews.map((v) => {
                        return (
                            <div>
                                <p>{v.rating}</p>
                                <h4>{v.name}</h4>
                                <p>{v.body.substring(0, 10) + '...'}</p>
                                {
                                    v.thumbs.length > 0 ? 
                                    <div>Thumbs up: {v.thumbs.length}</div> :
                                    null
                                }
                            </div>
                        )
                    })}
                    
                    
                </div>
            </div>
        )
    }
}
