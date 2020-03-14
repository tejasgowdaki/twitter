const Twitter = require("twitter");

const socket = require("../socket");

const twitter = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const emitNewTweet = tweet => {
  socket.emit("newTweet", { tweet });
};

let twitterStream;

const streamTweets = searchText => {
  if (twitterStream) process.nextTick(() => twitterStream.destroy());

  const stream = twitter.stream("statuses/filter", { track: searchText });

  twitterStream = stream;

  stream.on("data", tweet => {
    emitNewTweet(tweet);
  });

  stream.on("error", error => {
    console.log("streamTweets -> error", error);
  });
};

module.exports = streamTweets;
