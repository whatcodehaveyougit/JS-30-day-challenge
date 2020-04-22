# Hold Shift / Select Checkboxes

This uses forEach instead of map as querySelectorAll returns a nodeList, map cannot be used on a nodeList.

Every time the user clicks a checkbox the handleClick event gets run.  

As can be seen I played around with 2 ways to write the handleClick function.

It is interesting that handleClick written below does not have any parameters however, when you call it
with a (event) parameter it does return the event.

checkboxes.forEach( box => box.addEventListener('click', handleClick))

In order to use the in built .shift functionality I have to return the event specifically.


### The handleClick function

This loops through EVERY single checkbox using a forEach loop, just like map.
Think of the first if statement as a light switch, it gets turned on and off.
When on, every single element that is iterated through gets checked.
It gets turned off when it reaches checkbox.this.  Everything between the lastChecked (firstSelected) and this will be turned on/checked.
