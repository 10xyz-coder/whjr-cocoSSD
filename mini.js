function g(n) {
  return document.getElementById(n);
}

g('b').onclick = (() => {
  location.href = "https://10xyz-coder.github.io/whjr-cocoSSD/";
})

let canvas;
let res;
let mainImg;

function preload() {
  // Load the image before the sketch starts
  img = loadImage("https://10xyz-coder.github.io/whjr-cocoSSD/human.avif");
  img4 = loadImage("https://10xyz-coder.github.io/whjr-cocoSSD/dog_cat.jpg");
  img2 = loadImage("https://10xyz-coder.github.io/whjr-cocoSSD/messi.jpeg");
  img3 = loadImage("https://10xyz-coder.github.io/whjr-cocoSSD/mobile.jpeg");
}

function setup() {
  // Calculate the central position of the canvas
  const canvasWidth = 600; // Set the desired canvas width
  const canvasHeight = 400; // Set the desired canvas height
  const centerX = (windowWidth - canvasWidth) / 2;
  const centerY = (windowHeight - canvasHeight) / 2;

  // Create a canvas and position it centrally
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(centerX, centerY);

  // Preserve the aspect ratio of the image
  const aspectRatio = img.width / img.height;
  const scaledWidth = canvasWidth;
  const scaledHeight = canvasWidth / aspectRatio;

  // Display the image on the canvas
  image(img, 0, 0, scaledWidth, scaledHeight);
  mainImg = img;
  if (location.href.includes('cat')) {
    image(img4, 0, 0, scaledWidth, scaledHeight);
    mainImg = img4;
  }
  if (location.href.includes('ball')) {
    image(img2, 0, 0, scaledWidth, scaledHeight);
    mainImg = img2;
  }
  if (location.href.includes('mobile')) {
    image(img3, 0, 0, scaledWidth, scaledHeight);
    mainImg = img3;
  }

  objectDetector = ml5.objectDetector('cocossd', modelLoaded)
}

function modelLoaded() {
  console.log('Model Loaded!');
  objectDetector.detect(mainImg, gotResult);
}

function windowResized() {
  // Recalculate the central position of the canvas when the window is resized
  const centerX = (windowWidth - width) / 2;
  const centerY = (windowHeight - height) / 2;
  canvas.position(centerX, centerY);
}

function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    res = results;
    drawResults(res)
  }
}

function drawResults(r) {
  for (i = 0; i < r.length; i++) {

    let label = r[i].label;
    let conf = r[i].confidence;
    let x = r[i].x;
    let y = r[i].y;
    let height = r[i].height;
    let width = r[i].width;

    fill('#FF0000');
    text(label, x + 45, y + 75)
    noFill()
    stroke('#FF0000');
    rect(x, y, width, height)
  }
}
