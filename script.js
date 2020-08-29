// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// global object
T = {} ;
T1 = {} ;
T.timerDiv = document.getElementById('timer');
T1.timerDiv = document.getElementById('timer1');

function displayTimer() {
  // initilized all local variables:
  var hours='00', minutes='00',
  time = '',
  timeNow = new Date().getTime(); // timestamp (miliseconds)

  T.difference = timeNow - T.timerStarted;

  // minutes
  if(T.difference > 60000) {
    minutes = Math.floor(T.difference/60000);
    if (minutes > 60) {
      minutes = minutes % 60;
    }
    if(minutes < 10) {
      minutes = '0'+String(minutes);
    }
  }

  // hours
  if(T.difference > 3600000) {
    hours = Math.floor(T.difference/3600000);
    // if (hours > 24) {
    // 	hours = hours % 24;
    // }
    if(hours < 10) {
      hours = '0'+String(hours);
    }
  }

  time  =  hours   + ':'
  time += minutes;

  T.timerDiv.innerHTML = time;
}

function startTimer() {
  // save start time
  T.timerStarted = new Date().getTime()
  console.log('T.timerStarted: '+T.timerStarted)

  if (T.difference > 0) {
    T.timerStarted = T.timerStarted - T.difference
  }
  // update timer periodically
  T.timerInterval = setInterval(function() {
    displayTimer()
	console.log('time: '+T.timerStarted)
  }, 10);

  // show / hide the relevant buttons:
  document.getElementById('go').style.display="none";
  document.getElementById('stop').style.display="inline";
  document.getElementById('clear').style.display="none";
}

function stopTimer() {
  clearInterval(T.timerInterval); // stop updating the timer

  document.getElementById('stop').style.display="none";
  document.getElementById('go').style.display="inline";
  document.getElementById('clear').style.display="inline";
}

function clearTimer() {
  clearInterval(T.timerInterval);
  T.timerDiv.innerHTML = "00:00"; // reset timer to all zeros
  T.difference = 0;

  document.getElementById('stop').style.display="none";
  document.getElementById('go').style.display="inline";
  document.getElementById('clear').style.display="none";
}
