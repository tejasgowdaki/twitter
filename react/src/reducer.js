/* eslint-disable default-case */
const initialState = {
  pageSize: 12,
  tweets: [],
  newTweets: []
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "LOAD_MORE_ASYNC":
      newState.pageSize += 12;
      break;
    case "ADD_NEW_TWEET_ASYNC":
      newState.newTweets.unshift(action.value);
      break;
    case "SET_TWEETS_ASYNC":
      newState.tweets = action.value;
      newState.newTweets = [];
      break;
    case "LOAD_NEW_TWEETS_ASYNC":
      newState.tweets = [...newState.newTweets, ...newState.tweets];
      newState.newTweets = [];
      break;
  }
  return newState;
};

export default reducer;
