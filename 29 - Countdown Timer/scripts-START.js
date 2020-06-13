//  This way does not work well - quite a few bugs
// When scrolling in IOS the setInterval is paused for example, nae use!

// function timer(seconds){
//   setInterval(function(){
//     seconds--
//   }, 1000)
// }

let countdown;
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {

  const now = Date.now();
  const then = now + seconds * 1000;

  // This means that it displays as soon as the timer starts
  displayTimeLeft(seconds)

  displayEndTime(then)

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (secondsLeft < 0){
      clearInterval(countdown)
      return;
    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}


// This means that it displays as soon as the timer starts
function displayTimeLeft(seconds){

// Clear it when you start
  clearInterval(countdown)

  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;

  // Using this ternary operator to make sure that it displays 05 seconds left instead of just 5 seconds left.
  const display = `${minutes}: ${remainderSeconds < 10 ? '0' : '' } ${remainderSeconds}`;
  timerDisplay.textContent = display;
  console.log(minutes, remainderSeconds)
  // This simply updates the title tag
  document.title = display
}

function displayEndTime(timestamp){
  const end = new Date(timestamp)
  const hour  = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${hour}:${minutes}`
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins*60)
   this.reset()
})
