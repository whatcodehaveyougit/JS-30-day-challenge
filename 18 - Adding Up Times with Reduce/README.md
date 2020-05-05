# Adding Up Times with Reduce

Here we add up all the video lengths to get the total length of all the videos!

### Using .split

maps through array, splits it at ':' and one half goes into mins and the other secs
const [mins, secs] = timeCode.split(':')

It returns an array but only an array of 2 items it seems.

### .reduce

.reduce((total, vidSeconds) => total + vidSeconds);

It works well putting it here as it prevents the need to have a promise.  
It kicks into action when the array is finished / has been fully mapped out.  So that seems that although the array returns an item every time to put into the array it is not finished until the array is complete. Thus, you can chain another function onto it like in this exercise.

The first value is the accumular, 2nd the current one being processed
