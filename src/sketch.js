function setup() {
  let canv = createCanvas(400, 400);
  canv.parent('container');
}

function draw() {
  background('#606c38');
  //centerX, centerY, width, height
  fill('#283618');
  ellipse(mouseX,mouseY,100,100);
}