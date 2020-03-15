module.exports = async function fetchTweets(req, res) {
  const searchText = req.query.search;
  const tweets = await sails.helpers.search(searchText);
  await sails.helpers.stream(searchText);
  res.status(200).json({ success: true, tweets });
};
