document.addEventListener("DOMContentLoaded", function(event) {    
    var chat = document.querySelector("#chat>ul");
    const el = document.getElementById("chat");
    var get_user_badges = "";

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://printpet.github.io/data.json",
        "method": "GET"
    }

    $.ajax(settings).done(function (response) {
        var results = [];
        var searchField = "set_id";
        var searchVal = "1979-revolution_1";
        for (var i=0; i < response.data.length; i++){
            if (response.data[i][searchField] == searchVal) {
                results.push(response.data[i]["versions"][0]["image_url_1x"]);
                console.log(JSON.stringify(results));
            }
        }
    });

    ComfyJS.onChat = (user, message, flags, self, extra) => {
        console.log(user, message);

        var newMessage = document.createElement("li");
        var icon = document.createElement("img");
        var get_user_color = extra.userColor;
        get_user_badges = extra.userBadges;
        var myJSON = JSON.stringify(get_user_badges);
        console.log(myJSON);
        strArray = myJSON.split('"');  
        console.log(strArray);

        for(var i=0; i < strArray.length; i++){
            
        }

        var text = document.createElement("blockquote");

        newMessage.setAttribute('id', 'body');
        newMessage.setAttribute('style', `color: ${get_user_color};`);

        //icon.setAttribute('src', `${data}`)

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