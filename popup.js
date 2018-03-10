document.addEventListener('DOMContentLoaded', () => {
  var input = document.getElementById('value');

  document.getElementById('restore').addEventListener('click', () => {
    restore();
  });
  document.getElementById('submit').addEventListener('click', () => {
    if(input.value >= 1){
      //when the time set by user is equal to 1 minute
      if(input.value == 1) {
        var options = {
          type: 'basic',
          title: 'Time saver',
          message: 'You have 1 minutes left',
          iconUrl:'icon.png'
        };
        chrome.notifications.create('reminder',options, function(notificationId){
          console.log("!!!!!!!");
        });
      }else { 
        chrome.alarms.create("oneMinuteAlarm", {delayInMinutes:input.value - 1})
      }
      set_auto_close(input.value);
    }
  });
});

function set_auto_close(time) {
  let minutes = time;
  chrome.alarms.create("autoCloseAlarm", {delayInMinutes:minutes, periodInMinutes:minutes})
}
function restore(){
  chrome.sessions.getRecentlyClosed(function(s){
    chrome.sessions.restore(s[0].sessionId);
  })
}


