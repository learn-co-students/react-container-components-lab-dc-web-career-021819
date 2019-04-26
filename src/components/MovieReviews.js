// Code MovieReviews Here
import React from 'react'

function renderReviews(reviews){
  return reviews.map(review => {
    const {headline} = review
    return <div key={`review-${reviews.indexOf(review)}`} className="review">{headline}</div>
  })
}

function MovieReviews(props){return <div className="review-list">{renderReviews(props.reviews)}</div>}

export default MovieReviews
