import React, { Component } from 'react';
import './App.css';

import TweetList from './TweetList';
import Loading from './Loading';
import Form from './Form';

import { addTweet, deleteTweet, fetchTweets } from "./TweetActions";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = this.props.store.getState();
  }
  addTweet = newTweetBody => {
    addTweet(this.props.store, newTweetBody)
  }
  deleteTweet = tweetId => {
    this.props.store.dispatch(deleteTweet(tweetId));
  }
  _onChange = () => {
    this.setState(this.props.store.getState());
  }
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(this._onChange);
    fetchTweets(this.props.store);
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div className="App">
        <Form addTweet={this.addTweet} />
        <Loading isLoading={this.state.isLoading} />
        <TweetList tweets={this.state.tweets}
          deleteTweet={this.deleteTweet}
          />
        <div className="app-error">{this.state.error}</div>
      </div>
    );
  }
}

export default App;
