import React, {Component} from 'react'

export default class ReviewForm extends Component {
  render() {
    return (
        <form className="ReviewForm">
            <h3>Leave a Review</h3>
            <label for="pass">Name: </label>
            <input type="text" id="name" name="name"></input><br></br>
            <input type="text" id="review" name="review"></input>
        </form> 
    )
  }
}