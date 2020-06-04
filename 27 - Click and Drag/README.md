# Click and Drag

### Chromes dev tools nae working

After doing the first 5 minutes of this video I hit a bug that was very strange as I was positive that my code was correct.  The mousedown event listener was not being triggered when the mouse went down, it was being triggered when the mouse was released (this is with the dev tools open).  I knew that there is a bug with hover when the devtools are open but this too, surely not!?

I tried simply moving over to Firefox and it worked like a dream. :L


### pageX

The pageX read-only property of the MouseEvent interface returns the X (horizontal) coordinate (in pixels) at which the mouse was clicked, relative to the left edge of the entire document. This includes any portion of the document not currently visible.

### offsetLeft

The HTMLElement.offsetLeft read-only property returns the number of pixels that the upper left corner of the current element is offset to the left within the HTMLElement.offsetParent node.

For block-level elements, offsetTop, offsetLeft, offsetWidth, and offsetHeight describe the border box of an element relative to the offsetParent.
