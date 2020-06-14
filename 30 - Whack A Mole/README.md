# Whack a Mole game

### Neat little function to give a random amount of time

function randomTime(min, max){
  return Math.round(Math.random()*(max - min) + min);
}


### Neat calculation to get a random hole in the nodelist

const idx = Math.floor(Math.random() * holes.length)


### isTrusted on this event

The isTrusted tells the browsers whether the user actually clicked the element or not.


### Triggering event when mole is clicked

moles.forEach(mole => mole.addEventListener('click', bonk));

Runs the bonk function which increases the user's score and makes the mole go back down into the hole
