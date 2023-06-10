function g(n) {
  return document.getElementById(n);
}

g('b').onclick = (() => {
  location.href = "https://10xyz-coder.github.io/whjr-cocoSSD/";
})

let canvas;

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
  if (location.href.includes('cat')) {
    image(img4, 0, 0, scaledWidth, scaledHeight);
  }
  if (location.href.includes('ball')) {
    image(img2, 0, 0, scaledWidth, scaledHeight);
  }
  if (location.href.includes('mobile')) {
    image(img3, 0, 0, scaledWidth, scaledHeight);
  }
}

function windowResized() {
  // Recalculate the central position of the canvas when the window is resized
  const centerX = (windowWidth - width) / 2;
  const centerY = (windowHeight - height) / 2;
  canvas.position(centerX, centerY);
}
