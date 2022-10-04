let sides = 3;
function setup() {
  let currentCanvas = createCanvas(400, 400, WEBGL);
  currentCanvas.parent('container');
  strokeWeight(3);
}

function draw() {
  background('#636c38');
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  fill('#cb3028');
  torus(50, 20, sides, 24);
}

function mouseClicked() {
  if (sides > 10) {
    sides = 3;
  } else {
    sides++;
  }
}