# Follow along link highlighter


### Great little piece of code here which creates an element, adds a class to it then throws it into the DOM.

    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.append(highlight);


  Getting the co-ordinates of where the text is on the page.
  This gives us all the information that we need to find where the element is on the page, as can be seen by the console.log

  	this.getBoundingClientRect()


### The Span Element

The span element does not slot into the HTML next to where the <a></a> tag is. It lives at the bottom of the page and every time the user hovers over a different <a></a> tag it gets generated again.  The reason it moves around is that the dynamically generated styles change the position and shape of it to the size of the element.