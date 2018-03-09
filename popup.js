document.addEventListener('DOMContentLoaded', () => {
  var input = document.getElementById('value');

  document.getElementById('restore').addEventListener('click', () => {
    restore();
  });
  document.getElementById('submit').addEventListener('click', () => {
    if(input.value > 1){
      set_auto_close(input.value);
    }
  });
});

function set_auto_close(time) {
  let minutes = time/60;
  chrome.alarms.create({delayInMinutes:minutes, periodInMinutes:minutes})
}
function restore(){
  chrome.sessions.getRecentlyClosed(function(s){
    chrome.sessions.restore(s[0].sessionId);
  })
}


