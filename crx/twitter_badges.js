chrome.storage.local.get(
    {'twitter_ids': []},
    function (result) {
        var twitter_id_list = result['twitter_ids'];
        var usernames = document.getElementsByClassName('username');
        for (var i = 0; i < usernames.length; i++) {
            var username = usernames[i].textContent;
            if(username.startsWith('@')) {
                username = username.substr(1)
            }
            if(twitter_id_list.indexOf(username) != -1) {
                usernames[i].textContent += " (RC)";
                console.log("Match! " + username);
            }
        }
})