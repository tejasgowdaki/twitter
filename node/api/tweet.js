const response = require("../response");

const searchTweets = require("../helpers/search");
const streamTweets = require("../helpers/stream");

const fetchTweets = async (req, res, next) => {
  try {
    const searchText = req.query.search;
    const tweets = await searchTweets(searchText);

    streamTweets(searchText);

    res.status(200).json(response.success({ tweets }));
  } catch (error) {
    console.log("fetchTweets -> error", error);
    res
      .status(500)
      .json(
        response.error({ message: "Something went wrong. Please try again." })
      );
  }
};

module.exports = { fetchTweets };
