# Local Storage

This was a long video so a lot to learn, there are plenty of notes on the exercise itself too!

We may only store strings in local storage

localStorage.setItem('items', 'items');
localStorage.setItem('items', JSON.stringify(items))

So here it is being stored as a string, plain and simple.  But if we wrap it in a JSON.parse

So what we want is something like this:

localStorage.setItem('items', JSON.stringify(items)))
JSON.parse(localStorage.getItem('items'))


### ES6 way to add a key value pair in an object, very cool !

function addItem(e){
  const text = (this.querySelector('[name=item]').value)
  item = {
    text,
    done:false
  }
}


When connected to a form - listen for submit instead of click - more specific
  addItems.addEventListener ('submit', addItem)


In the Input field it is the ID field that is linked with the for on lable that links the 2 HTML elements
  <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}>
   <label for="item${i}">${plate.text}</label>

### .reset

.reset is hooked up to all the form input fields.  As this event is a form this.restet is ideal
this.reset()

# .matches()

This is a built in JS filter for elements, very useful

Use normal if statement for matching strings:

if(x === 'x') {
  // do this
}

Use .matches() for elements.

if (!e.matches('x'){
  // do this
}
