const OAuth = require("oauth");

const oauth = new OAuth.OAuth(
  "https://api.twitter.com/oauth/request_token",
  "https://api.twitter.com/oauth/access_token",
  sails.config.twitterConsumerKey, // consumer key
  sails.config.twitterConsumerSecret, // consumer secret
  "1.0A",
  null,
  "HMAC-SHA1"
);

module.exports = {
  friendlyName: "Search tweets",

  description: "Search tweets by key word and return data",

  inputs: {
    searchText: {
      type: "string",
      example: "Javascript",
      description: "Search keyword",
      required: true
    }
  },

  fn: async function(inputs, exits) {
    oauth.get(
      `https://api.twitter.com/1.1/search/tweets.json?q=${inputs.searchText}&count=100`,
      sails.config.twitterAccessTokenKey, //test user token
      sails.config.twitterAccessTokenSecret, //test user secret
      function(e, data, res) {
        if (e) reject(e);
        const response = JSON.parse(data);
        return exits.success(response ? response.statuses : []);
      }
    );
  }
};
