import React, { Component } from 'react';

class Form extends Component {
  handleAddTweet = () => {
    this.props.addTweet(this.refs.tweetInput.value);
    this.refs.tweetInput.value = "";
  };
  render() {
    return (
      <div className="Form">
        <form>
          <textarea ref="tweetInput"></textarea>
          <button type="button"
            disabled={this.props.isTweeting}
            onClick={this.handleAddTweet}>Tweet</button>
        </form>
      </div>
    );
  }
}

export default Form;
