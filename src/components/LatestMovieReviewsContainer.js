import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'c0s2A2QRmzH7TwJy8IatANqIFoHXFAjz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
//fetch a list of the most recent reviews and display them
class LatestMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: []
    };
  }

  componentDidMount(){
    fetch(URL)
      .then(res => res.json())
      .then(reviews => {
        console.log(reviews.results)
        this.setState({ reviews: reviews.results })
      })
  }

  render(){
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer
