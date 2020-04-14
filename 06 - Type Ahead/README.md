# Day 6 - Ajax Type Ahead

## Fetching Data from API

Promise -> Response -> Methods to determine next step!

Fetch is built into the browser JS
It return a promise - can see this by console.logging the result

fetch(endpoint)
  .then(blob => console.log(blob))

(The promise is blob of data)

Looking at the prototype you will see the JSON method
This method coverts the raw blob data into JSON

fetch(endpoint)
  .then(blob => blob.json()) <- This gives you the Response

  Call the json method which... Returns another promise!  Then console.log data (the end!)
  .then(data => console.log(data))

  Or.. To do something useful with the data
  Use the spread operator to push the individual data items into cities array rather than the whole array = an array within an array
  .then(data => cities.push(...data))



## RegExp aka Regular Expressions

  Regular expressions are used to perform pattern-matching

  G = Find all matches rather than stopping at the first Convert
  I = Makes it case insensitive


### Displaying the Results

1. Grab the HTML element
const searchInput = document.querySelector('.search');
NB this.value works because it is an input, the content of which can be accessed with this.value

2. Add an event listner to it, trigger the function to do the end result when a key goes up
searchInput.addEventListener('keyup', displayMatches);
3. This function (displayMatches) triggers the (findMatches) function which gets all the matches to be displayed

To generate a HTMl element for each index of the array we use the map function and use string interpolation.  The string interpolation allows us to have some HTML inside out JS which is what we need.


const matchArray = findMatches(this.value, cities)
console.log(matchArray)
