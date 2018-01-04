console.log("Bot is running !");
const Twit = require("twit");
const config = require("./config");
const twit = new Twit(config);
const stream = twit.stream("user");
const operation = {
  "doTwit" : msg => {
    twit.post('statuses/update',
      { status: msg },
      function(err, data, response) {
      if (err) {
        console.log("An Error Occured !" + err.message);
      } else {
        console.log("Successfully tweeted !");
      }
    });
  }
}
