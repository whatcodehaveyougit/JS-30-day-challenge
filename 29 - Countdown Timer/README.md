# Countdown Timer

Selecting Elements with a name

<form name="customForm" id="custom">
  <input type="text" name="minutes" placeholder="Enter Minutes">
</form>

document.customForm.addEventListener('submit', function(e){}

Quite cool to select it this way!

### Turning an int into a string

const seconds = parseInt(this.dataset.time);


### .this being brought over from function call

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer))


### Date.now

Returns the number of seconds since 1970 at midnight as that is when time began of course!

const end = new Date(timestamp)
const hour  = end.getHours();
const minutes = end.getMonth();  == returns 11 if it is november

It does return data like the hour and month though.
