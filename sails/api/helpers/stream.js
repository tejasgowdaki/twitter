const Twitter = require("twitter");


const twitter = new Twitter({
  consumer_key: sails.config.twitterConsumerKey,
  consumer_secret: sails.config.twitterConsumerSecret,
  access_token_key: sails.config.twitterAccessTokenKey,
  access_token_secret: sails.config.twitterAccessTokenSecret
});

let twitterStream;

module.exports = {
  friendlyName: "Stream tweets",

  description: "Stream tweets by key word and return data",

  inputs: {
    searchText: {
      type: "string",
      example: "Javascript",
      description: "Search keyword",
      required: true
    }
  },

  fn: async function(inputs, exits) {
    if (twitterStream) process.nextTick(() => twitterStream.destroy());

    const stream = twitter.stream("statuses/filter", {
      track: inputs.searchText
    });

    twitterStream = stream;

    stream.on("data", tweet => {
      console.log("tweet", tweet);
      //   emitNewTweet(tweet);
    });

    stream.on("error", error => {
      console.log("streamTweets -> error", error);
    });
  }
};
