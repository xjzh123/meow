const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1413909",
    key: "539e5ca64152a5073d79",
    secret: "4a878cc1301d84bfb2a6",
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
                if (dataObj.cmd == "chat") {
                    console.log("pushing:"+data)
                    pusher.trigger("my-channel", "meowChatMsg", {
                        channel: "onlychannel",
                        cmd: "chat",
                        level: 100,
                        nick: "onlyuser",
                        text: dataObj.text,
                        time: null,
                        trip: null,
                        uType: "user",
                        userid: null
                    });
                }
            }
        }
    }
}

