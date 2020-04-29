# Mouse Move Shadow

This one was quite difficult to debug at first because mousemove is currently not triggered when devtool are open.  Looked it up and seems like this is a bug!

 I did try a few fixes from Stack Overflow but could not seem to get it working.

The best fix was using Firefox.  Now we don't say that often!


// This if statement caters for when the user is not hovering over the hero banner
if(this !== e.target ){
  x = x + e.target.offsetLeft;
  y = y + e.target.offsetTop;
}
