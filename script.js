// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// global object
T = {} ;
T.timerDiv = document.getElementById('timer');

function displayTimer() {
  // initilized all local variables:
  var hours='00', minutes='00',
  miliseconds=0, seconds='00',
  time = '',
  timeNow = new Date().getTime(); // timestamp (miliseconds)

  T.difference = timeNow - T.timerStarted;

  // milliseconds
  if(T.difference > 10) {
    miliseconds = Math.floor((T.difference % 1000) / 10);
    if(miliseconds < 10) {
      miliseconds = '0'+String(miliseconds);
    }
  }
  // seconds
  if(T.difference > 1000) {
    seconds = Math.floor(T.difference / 1000);
    if (seconds > 60) {
      seconds = seconds % 60;
    }
    if(seconds < 10) {
      seconds = '0'+String(seconds);
    }
  }

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
  time += minutes + ':'
  time += seconds + ':'
  time += miliseconds;

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
  T.timerDiv.innerHTML = "00:00:00:00"; // reset timer to all zeros
  T.difference = 0;

  document.getElementById('stop').style.display="none";
  document.getElementById('go').style.display="inline";
  document.getElementById('clear').style.display="none";
}




T1 = {} ;
T1.timerDiv = document.getElementById('timer1');

function displayTimer1() {
  // initilized all local variables:
  var hours1='00', minutes1='00',
  miliseconds1=0, seconds1='00',
  time1 = '',
  timeNow1 = new Date().getTime(); // timestamp (miliseconds)

  T1.difference = timeNow - T1.timerStarted;

  // milliseconds
  if(T1.difference > 10) {
    miliseconds1 = Math.floor((T1.difference % 1000) / 10);
    if(miliseconds1 < 10) {
      miliseconds1 = '0'+String(miliseconds1);
    }
  }
  // seconds
  if(T1.difference > 1000) {
    seconds1 = Math.floor(T1.difference / 1000);
    if (seconds1 > 60) {
      seconds1 = seconds1 % 60;
    }
    if(seconds1 < 10) {
      seconds1 = '0'+String(seconds1);
    }
  }

  // minutes
  if(T1.difference > 60000) {
    minutes1 = Math.floor(T1.difference/60000);
    if (minutes1 > 60) {
      minutes1 = minutes1 % 60;
    }
    if(minutes1 < 10) {
      minutes1 = '0'+String(minutes1);
    }
  }

  // hours
  if(T1.difference > 3600000) {
    hours1 = Math.floor(T1.difference/3600000);
    // if (hours > 24) {
    // 	hours = hours % 24;
    // }
    if(hours1 < 10) {
      hours1 = '0'+String(hours1);
    }
  }

  time1  =  hours1   + ':'
  time1 += minutes1 + ':'
  time1 += seconds1 + ':'
  time1 += miliseconds1;

  T1.timerDiv.innerHTML = time1;
}

function startTimer1() {
  // save start time
  T1.timerStarted = new Date().getTime()
  console.log('T1.timerStarted: '+T1.timerStarted)

  if (T.difference > 0) {
    T1.timerStarted = T1.timerStarted - T1.difference
  }
  // update timer periodically
  T1.timerInterval = setInterval(function() {
    displayTimer1()
  }, 10);

  // show / hide the relevant buttons:
  document.getElementById('go1').style.display="none";
  document.getElementById('stop1').style.display="inline";
  document.getElementById('clear1').style.display="none";
}

function stopTimer1() {
  clearInterval(T1.timerInterval); // stop updating the timer

  document.getElementById('stop1').style.display="none";
  document.getElementById('go1').style.display="inline";
  document.getElementById('clear1').style.display="inline";
}

function clearTimer1() {
  clearInterval(T1.timerInterval);
  T1.timerDiv.innerHTML = "00:00:00:00"; // reset timer to all zeros
  T1.difference = 0;

  document.getElementById('stop1').style.display="none";
  document.getElementById('go1').style.display="inline";
  document.getElementById('clear1').style.display="none";
}