document.addEventListener('DOMContentLoaded', () => {
  var input = document.getElementById('value');
  chrome.alarms.getAll(function (alarms){
    // current enforcement status
    if(alarms.length == 0){
      document.getElementById("status").innerHTML = "No Enforcement On Schedule"
    } else {
      document.getElementById("status").innerHTML = "You are on a clock!"
    }
  })

  //restore functionality
  document.getElementById('restore').addEventListener('click', () => {
    restore();
  });

  document.getElementById('submit').addEventListener('click', () => {
    if(input.value > 0){
      set_auto_close(input.value);
      //one minutes warning
      if(input.value >= (1/60)){
        chrome.alarms.create("oneMinute",{when:Date.now()+ input.value*3600000-60000})
      } else {
        chrome.notifications.create('lessThanOneReminder',
      {
        type: 'basic',
        title: 'Enforcement Incoming',
        message: 'Less than 1 minutes left',
        iconUrl: 'icon.png'
      }, function(){});
      }
    } else {
      alert("Invalid Input");
    }
    chrome.notifications.clear("lessThanOneReminder")
    document.getElementById("status").innerHTML = "You are on a clock!";
  });

  document.getElementById('cancel').addEventListener('click', () => {
    cancel();
  });
});

/**
 * Handles auto close functionality
 * @param {*} time: the user input value of enforcement
 */
function set_auto_close(time) {
  chrome.alarms.create({when:Date.now()+time*3600000});
}

/** 
 * Function to handle restore previous closed tabs
*/
function restore(){
  chrome.sessions.getRecentlyClosed(function(s){
    chrome.sessions.restore(s[0].sessionId);
  })
}

/**
 * Function to cancel the current enforcement
 */
function cancel(){
  chrome.alarms.clearAll();
  document.getElementById("status").innerHTML = "No Enforcement On Schedule"
}
