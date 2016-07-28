let initialState = {
  tweets: [],
  isLoading: false,
  error: "",
  isTweeting: false
};

const actionsMap = {
  'DELETE_TWEET': (prevState, { tweetId }) => {
    return {
      ...prevState,
      tweets: prevState.tweets.filter(tweet => {
        return tweet.id !== tweetId;
      })
    };
  },
  'INIT_FETCH': (prevState, {}) => {
    return {
      ...prevState,
      isLoading: true
    }
  },
  'SUCCESS_FETCH': (prevState, { tweets }) => {
    return {
      ...prevState,
      tweets,
      isLoading: false
    };
  },
  'ERROR_FETCH': (prevState, action) => {
    return {
      ...prevState,
      error: action.error.message || "Can fetch tweets",
      isLoading: false
    }
  },
  'INIT_ADD': (prevState, {}) => {
    return {
      ...prevState,
      isTweeting: true
    }
  },
  'SUCCESS_ADD': (prevState, {newTweet}) => {
    return {
      ...prevState,
      tweets: [
        ...prevState.tweets,
        newTweet
      ],
      isTweeting: false
    };
  },
  'ERROR_ADD': (prevState, action) => {
    return {
      ...prevState,
      error: action.error.message || "Cant add tweets",
      isTweeting: false
    }
  }
}

const reducer = (prevState = initialState, action) => {
  console.log("REDUX1: ", prevState, action);
  const actionFunction = actionsMap[action.type];
  if (actionFunction) {
    return actionFunction(prevState, action)
  };
  return prevState;
};

export default reducer;
