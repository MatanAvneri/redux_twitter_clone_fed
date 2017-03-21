import queryString from 'query-string'

export const deleteTweet = (tweetId) => {
  return {
    type: "DELETE_TWEET",
    tweetId
  };
};

export const initFetch = () => {
  return {
    type: "INIT_FETCH"
  };
};

export const successFetch = (tweets) => {
  return {
    type: "SUCCESS_FETCH",
    tweets
  };
};

export const errorFetch = (error) => {
  return {
    type: "ERROR_FETCH",
    error
  };
}

export const initAdd = () => {
  return {
    type: "INIT_ADD"
  };
};

export const successAdd = (newTweet) => {
  return {
    type: "SUCCESS_ADD",
    newTweet
  };
};

export const errorAdd = (error, prevState) => {
  return {
    ...prevState,
    type: "ERROR_ADD",
    error
  };
}

// ****** ASYC *****
export const fetchTweets = (store) => {
  store.dispatch(initFetch());

  fetch("http://localhost:5000/tweets")
    .then(response => {
      return response.json();
    })
    .then(tweets => store.dispatch(successFetch(tweets)))
    .catch(error => store.dispatch(errorFetch(error)));
};

export const addTweet = (store, newTweetBody) => {
  store.dispatch(initAdd());
  const data = queryString.stringify({body: newTweetBody})

  fetch("http://localhost:5000/tweets", {
    method: "POST",
    body: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
    .then(response => {
      return response.json();
    })
    .then(newTweet => store.dispatch(successAdd(newTweet)))
    .catch(error => store.dispatch(errorAdd(error, store)));
};
