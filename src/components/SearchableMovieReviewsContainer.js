import React, { PureComponent } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = process.env.REACT_APP_API_KEY;
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends PureComponent {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }
  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  search = (event) => {
    event.preventDefault()
    const searchTerm = this.state.searchTerm
    const searchURL = URL + '&query=' + searchTerm
    fetch(searchURL)
    .then(response =>response.json())
    .then(json =>{
      console.log(json)
      this.setState({
        reviews: json.results
      })
    })
  }

  renderSearchResults = () =>{
    if (this.state.reviews.length > 0){
      return<MovieReviews key={"results"} reviews={this.state.reviews}/>
    }
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.search}>
          <input onChange={this.updateSearchTerm}></input>
          <input type="submit"/>
          </form>
          {this.renderSearchResults()}
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
