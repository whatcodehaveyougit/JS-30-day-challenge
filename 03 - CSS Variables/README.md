## Color Variables

Interesting lesson.

Interesting to see how CSS values can be dynamically changed by using variables.

Another use of querySelectorAll which returns a node list, not an array.

I am getting more familiar with addEventListener, there are so many different type of events to become familiar with.  MDN docs are good for showing all the different kinds.  

Had a problem at the end where the color picker was not dynamically changing the color when I selected a new one on the image / header, it only changed on the color bar at the top.  I thought that is was something to do with the event listener not picking it up fully.  It was like the listener could not fully pick up the event as the pop up color picker was shielding it.

Solved by switching to Chrome from Firefox!


## Use Cases for CSS Variables

If you have a color scheme on a website you can have 3 CSS variables

For example
 --main-color
 --secondary-color
 -extra-color

So if you want to change the color scheme you only have to change these 3 colors once and it will
 change across the entire site.

 -- It allows CSS values to be changed at run time which enables dynamic CSS to be written!
