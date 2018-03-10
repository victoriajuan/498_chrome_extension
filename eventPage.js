chrome.alarms.onAlarm.addListener( function(alarm){
    if(alarm.name == "oneMinute"){
        chrome.notifications.create('reminder',
        {
            type: 'basic',
            title: 'Enforcement Incoming',
            message: 'You have 1 minute left',
            iconUrl: 'icon.png'
        }, function(notificationId){});
    }
    else{
        chrome.alarms.clearAll();
        chrome.windows.getCurrent(function(w) {
            chrome.windows.remove(w.id);
        })
    }
})

