const Pusher = require("pusher");

var message

const pusher = new Pusher({
    appId: process.env.pusher_appId,
    key: process.env.pusher_key,
    secret: process.env.pusher_secret,
    cluster: "ap3",
    useTLS: true
});

export default (req,res) => {
    const {query} = req.query;
    if (query == null) {
        message = "null"
    }
    else {
        message = query
    }
    pusher.trigger("my-channel", "testMsg", {message: message});
}