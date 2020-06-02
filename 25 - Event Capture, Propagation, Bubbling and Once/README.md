# Event Capture, Propagation, Bubbling and Once


# Stopping the element the user clicked on from propagating up the document tree and triggering other click functions

function logText(e){
  console.log(this.classList.value);
  // stop bubbling !
  e.propagation()
}



# This function will only run once, very cool!

button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true
});
