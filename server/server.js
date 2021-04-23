const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const twitterRouter = require("./api/twitter");

app.use("/", twitterRouter);

// const Twitter = require("twitter-lite");
// require("dotenv").config();

// const client = new Twitter({
//   subdomain: "api",
//   version: "1.1",
//   consumer_key: process.env.TWITTER_CONSUMER_KEY,
//   consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
//   access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
//   access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
// });

// client
//   .get("search/tweets", {
//     q: "yosemite",
//   })
//   .then((tweets) => console.log(tweets))
//   .catch(console.error);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
