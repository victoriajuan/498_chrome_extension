// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


// $("#submit").click(function() {
//   let sec = $("#value").val()
//   alert(sec);
//   set_auto_close(sec*1000);
// });

// Time margin for open to force close
// var timeout = 2*60*1000; // 2 minutes
// var permission_range = ["02:00:00", "05:00:00"];

// document.OnLoad = start();

// function start() {
// 	force_open_sintyoku();
// 	grant_permission();
// }

// function grant_permission() {
// 	if (!get_if_permitted(new Date())) {
// 		alert("Close in 2 minutes! You should work harder!");
// 		set_auto_close(timeout);
// 	} else {
// 		alert("Permitted!");
// 	}
// }

// function force_open_sintyoku() {
// 	window.open("http://kkbnart.6.ql.bz/sintyoku2.html", null);
// }


// // Time calculation
// function get_if_permitted(time) {
// 	var today = (time.getYear()+1900) + "/" + (time.getMonth()+1) + "/" + time.getDate();
// 	var start = new Date(Date.parse(today + " " + permission_range[0]));
// 	var end = new Date(Date.parse(today + " " + permission_range[1]));
	
// 	if (time.getTime() > start.getTime() && time.getTime() < end.getTime()) {
// 		console.log("Permitted time");
// 		return true;
// 	} else {
// 		console.log("Permission denied");
// 		return false;
// 	}
// }

// function print_current_time() {
// 	dt = new Date();
// 	hours = dt.getHours();
// 	minutes = dt.getMinutes();
// 	seconds = dt.getSeconds();
// 	console.log(hours + ":" + minutes + ":" + seconds);
// }

document.addEventListener('DOMContentLoaded', () => {
  var input = document.getElementById('value');
  document.getElementById('submit').addEventListener('click', () => {
    set_auto_close(input.value *1000);
  });
  // getCurrentTabUrl((url) => {
  //   var input = document.getElementById('value');

  //   // Load the saved background color for this page and modify the dropdown
  //   // value, if needed.
  //   getSavedBackgroundColor(url, (savedColor) => {
  //     if (savedColor) {
  //       changeBackgroundColor(savedColor);
  //       dropdown.value = savedColor;
  //     }
  //   });

  //   // Ensure the background color is changed and saved when the dropdown
  //   // selection changes.
  //   dropdown.addEventListener('change', () => {
  //     changeBackgroundColor(dropdown.value);
  //     saveBackgroundColor(url, dropdown.value);
  //   });
  // });
});

function set_auto_close(time) {
	setTimeout(force_close, time);
}

function force_close() {
  window.close();
  window.open('','_self').close();
  chrome.windows.getCurrent(function(w) {
    chrome.windows.remove(w.id);
});
}
