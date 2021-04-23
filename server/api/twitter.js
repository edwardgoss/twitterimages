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

// default page just to render something before anything is searched
// router.route("/").get((req, res) => {
//   const defaultItems = [
//     "grand canyon",
//     "yosemite",
//     "yellowstone",
//     "acadia",
//     "zion",
//     "bryce canyon",
//     "grand teton",
//   ];

//   const randomItem =
//     defaultItems[Math.floor(Math.random() * defaultItems.length)];
//   client
//     .get("search/tweets", {
//       q: `${randomItem} -filter:retweets filter:images filter:safe`,
//       count: 100,
//     })
//     .then((tweets) => res.json(tweets))
//     .catch(console.error);
// });

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
