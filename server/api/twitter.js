const Twitter = require("twitter-lite");
const router = require("express").Router();
require("dotenv").config();

const client = new Twitter({
  subdomain: "api",
  version: "1.1",
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

router.route("/search/:query").get((req, res) => {
  const searchQuery = req.params.query;
  client
    .get("search/tweets", {
      q: `${searchQuery} -filter:retweets filter:images filter:safe`,
      count: 100,
    })
    .then((tweets) => res.json(tweets))
    .catch(console.error);
});

module.exports = router;
