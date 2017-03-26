(chrome.tabs.query({}, function(tabs) {
    document.getElementById('first').innerHTML = tabs[0].title;
    document.getElementById('second').innerHTML = tabs[1].title;
    document.getElementById('third').innerHTML = tabs[2].title;
    document.getElementById('fourth').innerHTML = tabs[3].title;
}))()