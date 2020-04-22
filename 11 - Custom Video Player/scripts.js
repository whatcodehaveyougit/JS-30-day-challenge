
// QuerySelector supports calling classes / Instead of document.getElementsByClassName('example')

const player = document.querySelector('.player')
const video = player.querySelector('.viewer')

// It seems that querySelector can dig into divs as seen below here
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider')

const controls = player.querySelectorAll('.player__controls')


// Build Functions
function togglePlay(){
  video[video.paused ? 'play' : 'pause']();
}

function skip(){
// this.dataset.skip does return a number but as a string.  parseFloat converting this string to a number
video.currentTime += parseFloat(this.dataset.skip)
}


function handleRangeUpdate(){
  console.log(this.value);
  video[this.name] = this.value
}


function handleProgress(){
   const perCent = (video.currentTime / video.duration * 100)
   progressBar.style.flexBasis = `${perCent}%`;
}

function scrub(e){
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime
}


// Paused is a method that can be called on the video element.
// This obv evaluates to truthy or falsey.
function updateButton(){
  const icon = this.paused ? '►' : '❚ ❚';
  // Again here we don't need to do the getElementsByClassName.  Just put the className in and that is it!
  toggle.textContent = icon
}

// Hook Up with event listeners

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton)
// Just grabbing this via the className
toggle.addEventListener('click', togglePlay);

skipButtons.forEach(button => button.addEventListener('click', skip))
ranges.forEach(range => range.addEventListener("change", handleRangeUpdate))

video.addEventListener('timeupdate', handleProgress)

let mousedown = false
progress.addEventListener('click', scrub)

// Very sneaky use of && !  Will only run the scrub fnction if mousedown is truthy
progress.addEventListener('mousemove', (e) => mousedown && scrub(e))
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)
