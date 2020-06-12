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
        reviews: [],
    }

    componentDidMount() {
        this.getItem()
        console.log(this.props.userName)
        console.log(this.props.userId)
    }

    getItem = async () => {
        try {
            const itemId = this.props.match.params.itemId
            const res = await axios.get(`/api/v1/item/${itemId}/`)
            let newState = {...this.state}
            newState = res.data
            newState.creatingReview = false
            newState.reviewData = {
                name: '',
                body: '',
                rating: 0,
                user: this.props.userId,
                item: itemId
            }
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

    toggleCreatingReview = () => {
        this.setState({creatingReview: !this.state.creatingReview})
    }

    inputChange = (evt) => {
        let newState = {...this.state}
        newState.reviewData[evt.target.name] = evt.target.value
        this.setState(newState)
        console.log(this.state.reviewData)
    }

    postReview = async (evt) => {
        evt.preventDefault()
        try{
            await axios.post('/api/v1/review/', this.state.reviewData)
            this.getItem()
            this.getTotalRating()
        } catch (error) {
            console.log('---- COULD NOT POST REVIEW ----')
            console.log(error)
            console.log('--------------------------------------')
        }
    }

    postThumbs = async (evt) => {
        evt.preventDefault()
        let thumbsData = {
            review: '',
            user: ''
        }
        thumbsData.review = evt.target.name
        thumbsData.user = this.props.userId
        console.log(thumbsData)
        try {
            await axios.post('/api/v1/thumbs/', thumbsData)
            this.getItem()
            this.getTotalRating()
        } catch (error) {
            console.log('---- COULD NOT POST THUMBS ----')
            console.log(error)
            console.log('--------------------------------------')
        }
    }


    render() {
        return (
            <div>
                <div>
                    <h3>{this.state.name}</h3>
                    <img src={this.state.photo_url} alt=''/>
                    <p>{this.state.description}</p>
                    <p>Overall Rating: {this.state.totalRating}</p>
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
                                    <div>👍 {v.thumbs.length}</div> :
                                    null
                                }
                                {
                                    this.props.userName === 'guest' ?
                                    null :
                                    <form onSubmit={this.postThumbs} name={v.id}>
                                        <input type="submit" value="👍"/>
                                    </form>
                                }
                            </div>
                        )
                    })}
                </div>
                <div>
                    {this.props.userName === 'guest' ?
                        <div>
                            Create Profile to add review
                        </div> :
                        <div>
                            <div onClick={this.toggleCreatingReview}>
                                {this.state.creatingReview ?
                                <div>Cancel Review</div> :
                                <div>Review this item</div>}
                            </div>
                            <div>
                                {this.state.creatingReview ?
                                    <form onSubmit={this.postReview}>
                                        <label htmlFor="rating">Rate this item:</label>
                                        <input onChange={this.inputChange} type="number" min="1" max="5" name="rating"/>
                                        <label htmlFor="name">Review Title:</label>
                                        <input  onChange={this.inputChange} type="text" name="name"/>
                                        <label htmlFor="body">Message: </label>
                                        <input onChange={this.inputChange} type="text" name="body"/>                                        
                                        <input type="submit" value="Post Review"/>
                                    </form> :
                                    null
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}


// review = 
//     user = 