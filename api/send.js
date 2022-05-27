const Pusher = require("pusher");

const pusher = new Pusher({
    appId: process.env.pusher_appId,
    key: process.env.pusher_key,
    secret: process.env.pusher_secret,
    cluster: "ap3",
    useTLS: true
});

export default async function handler(request, response) {
    const { data } = request.query
    if (data != null) {
        console.log("sending:"+data)
        var dataObj = JSON.parse(data)
        if (dataObj != undefined){
            if ("cmd" in dataObj) {
                if (!("trip" in dataObj)){
                    dataObj.trip = null
                }
                if (dataObj.cmd == "chat" && "nick" in dataObj) {
                    console.log("pushing:"+data)
                    pusher.trigger("my-channel", "meowChatMsg", {
                        channel: "onlychannel",
                        cmd: "chat",
                        level: 100,
                        nick: dataObj.nick,
                        text: dataObj.text,
                        time: null,
                        trip: dataObj.trip,
                        uType: "user",
                        userid: null
                    });
                }
                else if (dataObj.cmd == "join") {
                    console.log("pushing:"+data)
                    pusher.trigger("my-channel", "meowChatMsg", {
                        channel: "onlychannel",
                        cmd: "info",
                        text: `${dataObj.nick} joined`,
                        time: null
                    });
                }
                console.log('send finish')
            }
        }
    }
}

