// Vibrant Organic Noise Grid

let spacing = 40;      // distance between grid points
let noiseScale = 0.05; // controls smoothness of noise

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop(); // static sketch
  generateGrid();
}

function draw() {
  // draw() is intentionally empty
}

// Generates the full grid composition
function generateGrid() {
  background(10); // dark background

  // Loop through grid
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {

      // Perlin noise values
      let n = noise(x * noiseScale, y * noiseScale);

      // Organic offsets
      let offset = map(n, 0, 1, -12, 12);

      // Circle size based on noise
      let size = map(n, 0, 1, 12, 32);

      // Colour variation
      let hue = map(n, 0, 1, 180, 320);
      let saturation = 80;
      let brightness = 100;

      stroke(hue, saturation, brightness);
      strokeWeight(map(n, 0, 1, 0.5, 2));
      noFill();

      ellipse(x + offset, y + offset, size, size);
    }
  }
}

// Keyboard interaction
function keyPressed() {
  if (key === 'r' || key === 'R') {
    noiseSeed(int(random(10000))); // new noise pattern
    redraw();
  }
}
