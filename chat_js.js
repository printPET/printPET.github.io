document.addEventListener("DOMContentLoaded", function(event) {    
    var chat = document.querySelector("#chat>ul");
    const el = document.getElementById("chat");

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://printpet.github.io/data.json",
        "method": "GET"
    }

    ComfyJS.onChat = (user, message, flags, self, extra) => {
        console.log(user, message);

        var output_array = [];
        var results = [];

        var newMessage = document.createElement("li");

        var icon = document.createElement("img");

        var get_user_color = extra.userColor;
        get_user_badges = extra.userBadges;

        var myJSON = JSON.stringify(get_user_badges);
        console.log(myJSON);

        var strArray = myJSON.split('"');  
        console.log(strArray);

        var n = 0;

        for(var i=0; i < strArray.length; i++){
            if(i == 1 || (i % 5 == 0 && i != 0)){
                output_array[n] = strArray[i];
                console.log(output_array[n]);
                n += 1;
            }
        }

        $.ajax(settings).done(function (response) {
            var searchField = "set_id";
            var searchVal = "";
            var n = 0;
    
            while(n < output_array.length){
                searchVal = output_array[n];
    
                for(var i = 0; i < response.data.length; i++){
                    if (response.data[i][searchField] == searchVal) {
                        results.push(response.data[i]["versions"][0]["image_url_1x"]);
                        console.log(results);
                    }
                }
    
                n += 1;
            }
        });

        var string_results = JSON.stringify(results);
        var split_results = string_results.split('"');
        console.log(split_results)

        var text = document.createElement("blockquote");

        newMessage.setAttribute('id', 'body');
        newMessage.setAttribute('style', `color: ${get_user_color};`);

        icon.setAttribute('src', `${split_results}`)

        text.setAttribute('style', `color: black;`);

        newMessage.innerText = user;
        text.innerText = message;

        newMessage.append(icon);
        chat.append(newMessage);
        chat.append(text);
        
        if(el) {
            el.scrollTop = el.scrollHeight;
        }
    }

});

ComfyJS.Init("thepet04");