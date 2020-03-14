import React from "react";
import { connect } from "react-redux";
import "./App.css";

import "semantic-ui-css/semantic.min.css";

import { socket } from "./socket";

import Tweet from "./tweets";

const App = props => {
  socket.on("newTweet", data => {
    props.addNewTweet(data.tweet);
  });

  return <Tweet />;
};

const mapDispatchToProps = dispatch => ({
  addNewTweet: tweet =>
    dispatch({
      type: "ADD_NEW_TWEET",
      tweet
    }),
  addTweets: tweets =>
    dispatch({
      type: "UPDATE_TWEETS",
      tweets
    })
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(App);
