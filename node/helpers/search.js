const OAuth = require("oauth");

const oauth = new OAuth.OAuth(
  "https://api.twitter.com/oauth/request_token",
  "https://api.twitter.com/oauth/access_token",
  process.env.TWITTER_CONSUMER_KEY, // consumer key
  process.env.TWITTER_CONSUMER_SECRET, // consumer secret
  "1.0A",
  null,
  "HMAC-SHA1"
);

const searchTweets = query => {
  return new Promise(async (resolve, reject) => {
    try {
      oauth.get(
        `https://api.twitter.com/1.1/search/tweets.json?q=${query}&count=100`,
        process.env.TWITTER_ACCESS_TOKEN_KEY, //test user token
        process.env.TWITTER_ACCESS_TOKEN_SECRET, //test user secret
        function(e, data, res) {
          if (e) reject(e);
          const response = JSON.parse(data);
          resolve(response ? response.statuses : []);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = searchTweets;
