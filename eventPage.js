chrome.alarms.onAlarm.addListener( function(alarm){
    if (alarm.name == "oneMinuteAlarm") {
        // chrome.alarms.clear("oneMinuteAlarm");
        var options = {
            type: 'basic',
            title: 'keep burning',
            message: 'You have 1 minutes left',
            iconUrl:'icon.png'
          };
          chrome.notifications.create('reminder',options, function(notificationId){
            console.log("!!!!!!!");
          });
    } else if(alarm.name == "autoCloseAlarm") {
        chrome.alarms.clearAll();
        chrome.windows.getCurrent(function(w) {
            chrome.windows.remove(w.id);
        });
    }
})