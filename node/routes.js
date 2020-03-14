const express = require("express");

const tweetRouter = express.Router();

const tweet = require("./api/tweet");

const router = app => {
  const apiRoutes = express.Router();

  tweetRouter.get("/tweets", tweet.fetchTweets);

  app.use(tweetRouter);

  // If no routes matches
  apiRoutes.use((req, res, next) => {
    if (!req.route) {
      const error = new Error("No route matched");
      error.status = 404;
      return next(error);
    }

    next();
  });
};

module.exports = router;
