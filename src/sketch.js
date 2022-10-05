let sides = 3;
function setup() {
  let currentCanvas = createCanvas(400, 400, WEBGL);
  currentCanvas.parent('container');
}

function draw() {
  background('#636c38');
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  fill('#cb3028');
  torus(50, 20, sides, 24);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  torus(150, 30, 30, 30);
}

function mouseClicked() {
  if (sides > 10) {
    sides = 3;
  } else {
    sides++;
  }
}