var links = document.getElementsByClassName('icon-links');
var github_id_list = [];
var twitter_id_list = [];

for (var i = 0; i < links.length; i++) {
    for (var j = 0; j < links[i].children.length; j++) {
        var href = links[i].children[j].href;
        if (href.startsWith('https://github.com')) {
            github_id_list.push(href.split('/')[3]);
        } else if (href.startsWith('https://twitter.com')) {
            twitter_id_list.push(href.split('/')[3]);
        }
    }
}

chrome.storage.local.set({'github_ids' : github_id_list});
chrome.storage.local.set({'twitter_ids' : twitter_id_list});