import { takeLatest, takeEvery, put } from "redux-saga/effects";

// load more tweets
function* loadMoreAsync(action) {
  yield put({ type: "LOAD_MORE_ASYNC" });
}

export function* watchLoadMore() {
  yield takeEvery("LOAD_MORE", loadMoreAsync);
}

// add new tweet
function* addNewTweetAsync(action) {
  yield put({ type: "ADD_NEW_TWEET_ASYNC", value: action.tweet });
}

export function* watchAddNewTweet() {
  yield takeEvery("ADD_NEW_TWEET", addNewTweetAsync);
}

// set tweets
function* setTweetsAsync(action) {
  yield put({ type: "SET_TWEETS_ASYNC", value: action.tweets });
}

export function* watchSetTweets() {
  yield takeLatest("SET_TWEETS", setTweetsAsync);
}

// load new tweets
function* loadNewTweetsAsync(action) {
  yield put({ type: "LOAD_NEW_TWEETS_ASYNC", value: action.tweets });
}

export function* watchLoadNewTweets() {
  yield takeEvery("LOAD_NEW_TWEETS", loadNewTweetsAsync);
}
