// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    { reviews.map(review => <Review reviewObj={review} /> )}
  </div>
)

const Review = (props) => (
  <div className="review" >
    <h1>{props.reviewObj.display_title}</h1>
    <p>{props.reviewObj.summary_short}</p>
  </div>
)

export default MovieReviews
