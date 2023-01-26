document.addEventListener("DOMContentLoaded", function(event) {    
    var chat = document.querySelector("#chat>ul");
    const el = document.getElementById("chat");

    ComfyJS.onChat = (user, message, flags, self, extra) => {
        console.log(user, message);

        var newMessage = document.createElement("li");
        newMessage.setAttribute('id', 'body');
        var text = document.createElement("blockquote");

        newMessage.innerText = user;
        text.innerText = message;

        newMessage.append(text);
        console.log(newMessage);
        chat.append(newMessage);
        
        if (el) {
            el.scrollTop = el.scrollHeight;
            console.log(el.scrollTop);
        }
    }

});

ComfyJS.Init("thepet04");