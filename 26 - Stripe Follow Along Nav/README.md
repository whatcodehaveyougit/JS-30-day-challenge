# Stripe follow along nav


### Finding which one has been hovered overflow

We don't need to do a .find, does it automatically.  Prove this by logging out "this"

const triggers = document.querySelectorAll('.ul-wrapper > li');
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))

### Adding classes one after the Other

this.classList.add('trigger-enter')

The value of this is inherited from the parent function - scope stuff !

setTimeout(() => {
  this.classList.add('trigger-enter-active')
})


### Using translate instead of position

background.style.setProperty('transform', `translate(${coords.left}, ${coords.top}px)`)

### How it works -  getBoundingClientRect();

Not exactly how i thought it worked at first, very useful though.  Apparecntly if you use J Query then it sorted out all that stuff for you.

top: dropdownCoords.top - navCoords.top,
