const canvas = document.getElementById("ballsim");
const context = canvas.getContext("2d");
const width = canvas.width;
const heightC = canvas.height;
const heightS = screen.height;

let radius = 0;
let positionX = 100;
let positionY = 20;
let velocityX = 0;
let velocityY = 0;
let accelerationX = 0;
let accelerationY = 0;

window.addEventListener('scroll', function() {
	const scrollPosition = window.scrollY;
	positionX = 2*scrollPosition;
});
console.log(positionX);
function draw() {
	context.clearRect(0,0,width,heightC);

	context.fillRect(positionX,positionY,20,40);
}
function animate() {
	draw();
	requestAnimationFrame(animate);
}
animate();