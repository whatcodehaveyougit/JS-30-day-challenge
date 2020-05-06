const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(localMediaStream => {
    // console.log(localMediaStream);
    video.srcObject = localMediaStream;
    video.play();
  })
  .catch(err => {
    console.error( "Nae access to webcam !", err
    );
  })
}

function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;

  // Cool that we are just able to grab the <canvas> html element.  This function gives it a specific height on width to that of the video.
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
  // The ctx element works by us passing an video image straight to it for it to render.
    ctx.drawImage(video, 0, 0,  width, height)
    let pixels = ctx.getImageData(0, 0, width, height)
    // This pixels log will give you a tonne of information.  For every pixel it will give the RGBA value as a number
    // This will be given as an array - so there will be an array of say 100 000 RGBA values to make up the picture
    // console.log(pixels);

    // Here we are messing with the pixels
    // pixels = redEffect(pixels)
    pixels = rgbSplit(pixels)
    ctx.putImageData(pixels, 0, 0)
  }, 17);
}


function takePhoto(){
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/yaya.jpg')
  // data will be a text based representation of the photo - pretty cool!
  console.log(data);

  // Creating an element using JS
  const link = document.createElement('a')

  // Assigning a href to the <a></a> element we created in JS
  link.href = data;

  link.setAttribute('download', 'handsome')

  // As expected this refers to <a>The Text Content in Here</a>
  link.textContent = 'download image'

  // Now we are creating another HTMl element which will be wrapped in the <a></a> tag.  The text representation of the
  // photo will be piped into the image element which will make sense of it. Very clever!
  link.innerHTML = `<img src="${data}" alt="Handome" />`;
  strip.insertBefore(link, strip. firstChild)
}

function redEffect(pixels){
  // console.log(pixels);
  for(let i = 0; i < pixels.data.length; i += 4){
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}


getVideo()

// When the video is playing it is going to emit this event "canplay" - runs the canplay function
video.addEventListener('canplay', paintToCanvas )
