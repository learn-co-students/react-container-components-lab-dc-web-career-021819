import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'c0s2A2QRmzH7TwJy8IatANqIFoHXFAjz';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

// Code SearchableMovieReviewsContainer Here
//will provide a searchable interface allowing the user to enter a search term and then receive a list of
//reviews that match the search terms
class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  // componentDidMount(){
  //   fetch(URL)
  //     .then(res => res.json())
  //     .then(reviews => this.setState({ reviews }))
  // }
  onChangeSearchEventHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  onSubmitEventHandler = (event) => {
    event.preventDefault()
    fetch(URL + `query=<${this.state.searchTerm}>&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(reviews => {
        console.log(reviews.results);
        this.setState({ reviews: reviews.results })
      })
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.onSubmitEventHandler}>
          <input type="text" onChange={this.onChangeSearchEventHandler}/>
          <button type="submit">Search</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
