// Vibrant Organic Noise Grid

let spacing = 40;      
let noiseScale = 0.05; 

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noLoop();
  generateGrid();
}

function draw() {
  
}


function generateGrid() {
  background(10); 

  
  for (let x = spacing; x < width; x += spacing) {
    for (let y = spacing; y < height; y += spacing) {

     
      let n = noise(x * noiseScale, y * noiseScale);

      
      let offset = map(n, 0, 1, -12, 12);

      
      let size = map(n, 0, 1, 12, 32);

      
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
