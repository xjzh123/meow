const Pusher = require("pusher");

var message

const pusher = new Pusher({
    appId: "1413909",
    key: "539e5ca64152a5073d79",
    secret: "4a878cc1301d84bfb2a6",
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