import React, { Component } from 'react';

class Tweet extends Component {
  handleClick = () => {
    this.props.removeTweet(this.props.id);
  }

  render() {
    const { id, body, timestamp } = this.props;
    const imgSrc = `http://lorempixel.com/48/48/people/?${id}`;

    return (
      <div onClick={this.handleClick} className="Tweet">
        <img src={imgSrc} />
        <div className="tweet-body">{ body }</div>
        <div className="tweet-timestamp">{ timestamp.toString() }</div>
      </div>
    );
  }
}

export default Tweet;
