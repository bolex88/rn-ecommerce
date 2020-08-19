import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import StarRating from 'react-native-star-rating'


class GeneralStarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 2.5
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating 
        disabled={false}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starSize={24}
        fullStarColor={'gold'}
      />
    );
  }
}


const styles = StyleSheet.create({
  Rating: {

  }
})


export default GeneralStarExample