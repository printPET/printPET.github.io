document.addEventListener("DOMContentLoaded", function(event) {    
    var chat = document.querySelector("#chat>ul");
    const el = document.getElementById("chat");
    var data = "";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://printpet.github.io/data.json",
        "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        data = response["data"][0]["versions_1"][0]["image_url_1x"];
        console.log(data);
    });

    ComfyJS.onChat = (user, message, flags, self, extra) => {
        console.log(user, message);

        var newMessage = document.createElement("li");
        var icon = document.createElement("img");
        var get_user_color = extra.userColor;
        var get_user_badges = extra.userBadges;
        console.log(get_user_badges)
        var text = document.createElement("blockquote");

        newMessage.setAttribute('id', 'body');
        newMessage.setAttribute('style', `color: ${get_user_color};`);

        icon.setAttribute('src', `${data}`)

        text.setAttribute('style', `color: black;`);

        newMessage.innerText = user;
        text.innerText = message;

        newMessage.append(icon);
        chat.append(newMessage);
        chat.append(text);
        
        if(el) {
            el.scrollTop = el.scrollHeight;
            console.log(el.scrollTop);
        }
    }

});

ComfyJS.Init("thepet04");