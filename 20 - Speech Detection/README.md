# Speech Detection

Very cool that plain old Javascript can handle SpeechRecognition on its own!


### Nice wee snippet

This little bit of code is creating an element, grabbing the div with the class "words" and then adding the new element
which has just been created.

p = document.createElement('p')
const words = document.querySelector('.words');
words.appendChild(p)


### Digging down into the Array

The speech recognition gave back some very nested arrays, this required digging down using map and then join('') at the end to convert the many arrays into a string.

const transcript = Array.from(e.results)
.map(result => result[0])
.map(result => result.transcript)
.join('')

### Only worked on Google Chrome
