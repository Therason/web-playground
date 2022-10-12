// three.js needs THREE things:
// a scene, a camera, and a renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x636c38)
// canvas' size is a square, so aspect ratio can be 1
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 400);
document.getElementById("container").appendChild(renderer.domElement);

// torus
let sides = 3;
let geometry = new THREE.TorusGeometry(15, 3, 24, sides);
const material = new THREE.MeshBasicMaterial({color: 0xcb3028});
let torus = new THREE.Mesh(geometry, material);
scene.add(torus);

camera.position.z = 40;
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.01;

  renderer.render(scene, camera);
};
animate();

const canv = document.querySelector("canvas");
canv.addEventListener("click", () => {
  if (sides > 10) {
    sides = 3;
  } else {
    sides++;
  }
  scene.remove(torus);
  geometry.dispose();
  geometry = new THREE.TorusGeometry(15, 3, 24, sides);
  torus = new THREE.Mesh(geometry, material);
  scene.add(torus);
});