import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";

import {
  watchLoadMore,
  watchAddNewTweet,
  watchSetTweets,
  watchLoadNewTweets
} from "./tweets/saga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoadMore);
sagaMiddleware.run(watchAddNewTweet);
sagaMiddleware.run(watchSetTweets);
sagaMiddleware.run(watchLoadNewTweets);

export default store;
