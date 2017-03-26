chrome.commands.onCommand.addListener(function(command) {
    if (command == "toggle-audio-tab-1") {
        chrome.tabs.query({}, function(tabs){
            chrome.tabs.executeScript(tabs[0].id, {
                'code': 'var video, audio, soundcloud, tal; video = document.querySelector("video"); audio = document.querySelector("audio"); soundcloud = document.querySelector("button.playControl.sc-ir.playControls__icon.playControls__play"); tal = document.querySelector("button[type=button]"); if (video) { video.paused ? video.play() : video.pause() }; if (audio) { audio.paused ? audio.play() : audio.pause() }; if (soundcloud) { soundcloud.click() }; if (tal) { tal.click() };'
            });
        });
    }

    if (command == "toggle-audio-tab-2") {
        chrome.tabs.query({}, function(tabs){
            chrome.tabs.executeScript(tabs[1].id, {
                'code': 'var video, audio, soundcloud, tal; video = document.querySelector("video"); audio = document.querySelector("audio"); soundcloud = document.querySelector("button.playControl.sc-ir.playControls__icon.playControls__play"); tal = document.querySelector("button[type=button]"); if (video) { video.paused ? video.play() : video.pause() }; if (audio) { audio.paused ? audio.play() : audio.pause() }; if (soundcloud) { soundcloud.click() }; if (tal) { tal.click() };'
            });
        });
    }

    if (command == "toggle-audio-tab-3") {
        chrome.tabs.query({}, function(tabs){
            chrome.tabs.executeScript(tabs[2].id, {
                'code': 'var video, audio, soundcloud, tal; video = document.querySelector("video"); audio = document.querySelector("audio"); soundcloud = document.querySelector("button.playControl.sc-ir.playControls__icon.playControls__play"); tal = document.querySelector("button[type=button]"); if (video) { video.paused ? video.play() : video.pause() }; if (audio) { audio.paused ? audio.play() : audio.pause() }; if (soundcloud) { soundcloud.click() }; if (tal) { tal.click() };'
            });
        });
    }

    if (command == "toggle-audio-tab-4") {
        chrome.tabs.query({}, function(tabs){
            chrome.tabs.executeScript(tabs[3].id, {
                'code': 'var video, audio, soundcloud, tal; video = document.querySelector("video"); audio = document.querySelector("audio"); soundcloud = document.querySelector("button.playControl.sc-ir.playControls__icon.playControls__play"); tal = document.querySelector("button[type=button]"); if (video) { video.paused ? video.play() : video.pause() }; if (audio) { audio.paused ? audio.play() : audio.pause() }; if (soundcloud) { soundcloud.click() }; if (tal) { tal.click() };'
            });
        });
    }
});