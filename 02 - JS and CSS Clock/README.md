### Making a JS clock

First I used the built in JS Data object to get the GMT.  I was able to use the built in methods such as getSeconds etc to get the exact information required.

Next I converted the time data to be reflected on a clock hands (to degrees).

To rotate the clock hands I used the CSS transform property, this is updated using JS with different values to display the correct time.
I needed to do some text interpolation  using `` to get this working as can be seen.

A nice little feature was adding the cubic bezier to give the clock a nice little tick action!

## The Challenge!

Getting the clock arms to always roate clockswise.

This was not included in the video and so I needed to work it out.  I have provided comments in my code to document the solution I came to and how I arrived there.  It may not be the most DRY code but it does work!
