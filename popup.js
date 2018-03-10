document.addEventListener('DOMContentLoaded', () => {
  var input = document.getElementById('value');

  document.getElementById('restore').addEventListener('click', () => {
    restore();
  });
  document.getElementById('submit').addEventListener('click', () => {
    if(input.value > 0){
      set_auto_close(input.value);
      if(input.value >= 1){
        chrome.alarms.create("oneMinute",{when:Date.now()+ (input.value - 1)*60000})
      }
      chrome.notifications.create('reminder',
      {
        type: 'basic',
        title: 'Enforcement Incoming',
        message: 'Less than 1 minute left',
        iconUrl: 'icon.png'
      }, function(notificationId){});
    } else {
      alert("Invalid Input");
    }
  });
  document.getElementById('cancel').addEventListener('click', () => {
    cancel();
  });
});

function set_auto_close(time) {
  chrome.alarms.create({when:Date.now()+time*60000});
}

function restore(){
  chrome.sessions.getRecentlyClosed(function(s){
    chrome.sessions.restore(s[0].sessionId);
  })
}

function cancel(){
  chrome.alarms.clearAll();
}