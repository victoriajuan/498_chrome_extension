
chrome.alarms.onAlarm.addListener( function(alarm){
    chrome.alarms.clearAll();
    chrome.windows.getCurrent(function(w) {
        chrome.windows.remove(w.id);
    })
})