# Sort Without Articles



### Getting the List to display on the page from the array

Needed to use a map function instead of a forEach, a map function returns something each time.  Like a factory!
This is what we wanted for that situation, a returned <li> element each time.

We needed to grab the element which we wanted to latch onto:
let bandsList = document.querySelector('#bands')

Easy Done.

bandsList.innerHTML = list.map((band) => {

After grabbing that element we wanted to access the innerHTML of it.
Each map would generate an element which would be added to the innerHTML on each iteration.

Like in the LocalStorage tutorial we needed to remove the commas in-between each array item.
}).join("");

### The strip function

Using RegEx = regular expressions
We are looking to find and replace all these regular expressions

function strip(bandName){
  return bandName.replace(/^(a |the |an)/i, "").trim()
}

This function finds all the characters as shown and replaces them with nothing

### Smart use of strip()

const sortedBands = bands.sort((a, b) => {
  if(strip(a) > strip(b)) {
    return 1;
  } else {
    return -1;
  }
})

Putting strip here is good because it does not actually modify the array, we are simply comparing the two items and discounting the selected characters when doing that.


### Using Map on one line, cool!

document.querySelector('#bands').innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('')

Elegant piece of code here, note that because it's on one line band doesn't need to be (band) and we don't need the {curleys} either.
