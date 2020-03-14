export const paginate = (tweets, pageSize) => {
  if (tweets.length <= pageSize) return tweets;
  const parsedTweets = JSON.parse(JSON.stringify(tweets))
  parsedTweets.splice(pageSize);
  return parsedTweets;
};
