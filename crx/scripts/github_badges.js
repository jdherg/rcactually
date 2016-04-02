chrome.storage.local.get(
    {'github_ids': []},
    function (result) {
        var github_id_list = result['github_ids'];
        var links = document.getElementsByTagName('a');
        console.log("Attempting to match.");
        for (var i = 0; i < links.length; i++) {
            var address = links[i].href;
            var candidate = address.substr(address.indexOf('github.com') + 11)
            if(candidate.indexOf('/') == -1 && github_id_list.indexOf(candidate) != -1) {
                var logo = new Image();
                logo.src = chrome.extension.getURL('images/rc.png');
                logo.style.height = '1em';
                logo.style['vertical-align'] = 'middle';
                logo.style.margin = '2px';
                links[i].appendChild(logo)
                console.log("Match! " + candidate);
            }
        }
})