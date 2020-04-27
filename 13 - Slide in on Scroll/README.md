# Slide in scroll

### window.scrollY
The read-only scrollY property of the Window interface returns the number of pixels that the document is currently scrolled vertically. The returned value is a double-precision floating-point value, indicates the number of pixels the document is currently scrolled vertically from the origin

ScrollY returns the Y coordinate of the top edge of the current viewport. (When at start of the page is will be 0px)

window.innerHeight
The read-only innerHeight property of the Window interface returns the interior height of the window in pixels, including the height of the horizontal scroll bar, if present.

So window.innerHeight + window.scrollY is the very bottom line of the page. Always

### element.offsetTop

Returns the distance of TOP of the current element relative to the top of its parent. in PX.
So if you want to get the top of the page then your image must be a direct child of the body which goes from the
very top of the page.

Makes sense that element.offsetTop + element.height gave us the number of pixels from the (top of the page => bottom of the image)
