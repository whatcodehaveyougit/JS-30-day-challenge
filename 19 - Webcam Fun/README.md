# Webcam fun!

Needed a web server to get this up and running.  Was going to use mamp but ended up just using Node to npm i a server, easy done!

To get the webcam working there were quite a lot of specific built in functions needed.  These can be seen in the getVideo()

Once it was all up and running we put some interesting filters on it, shows the relationship between maths and colors which was interesting.  The webcam returned an array of RGBA values which can be manipulated to give different effects.

A new event listener which I had never seen before.
video.addEventListener('canplay', paintToCanvas )

Getting a photo of the video stream and piping that into an <img /> element was a very interesting process.  Commented each step to explain what was happening, pretty cool!
