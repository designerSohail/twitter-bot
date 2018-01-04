console.log("Bot is running !");
const Twit = require("twit");
const config = require("./config");
const twit = new Twit(config);
const stream = twit.stream("user");
const operation = {
  "doTwit" : msg => {
    twit.post('statuses/update',
      { status: msg },
      (err, data, response) => {
      if (err) {
        console.log("An Error Occured !" + err.message);
      } else {
        console.log("Successfully tweeted !");
      }
    });
  },
  "sendMessage" : (id, name, msg) => {
    twit.post(
      "direct_messages/new",
      {
        user_id : id,
        screen_name : name,
        text : msg
      },
      (err, data, res) => {
        if (err) {
          this.sendMessage(807594238535868421, "designer_sohail", err.message);
        }
      }
    );
  }
}
stream.on("follow", e => {
  console.dir(e.source.screen_name + " followed !");
  operation.sendMessage(e.source.id, e.source.screen_name, `Hello ${e.source.screen_name}. How are you!`);
})
