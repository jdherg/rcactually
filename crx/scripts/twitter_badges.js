chrome.storage.local.get(
    {'twitter_ids': []},
    function (result) {
        var twitter_id_list = result['twitter_ids'];
        var usernames = document.getElementsByClassName('username');
        console.log("Attempting to match.");
        for (var i = 0; i < usernames.length; i++) {
            var username = usernames[i].textContent;
            if(username.startsWith('@')) {
                username = username.substr(1)
            }
            if(twitter_id_list.indexOf(username) != -1) {
                var logo = new Image();
                logo.src = chrome.extension.getURL('images/rc.png');
                logo.style.height = '1em';
                logo.style['vertical-align'] = 'middle';
                logo.style.margin = '2px';
                usernames[i].appendChild(logo)
                console.log("Match! " + username);
            }
        }
})