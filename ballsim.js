const canvas = document.getElementById("ballsim");
const context = canvas.getContext("2d");
const width = canvas.width;
const heightC = canvas.height;
const heightS = screen.height;

let radius = 20;
let positionX = 100;
let positionY = 80;
let velocityX = 0;
let velocityY = 0;
let accelerationX = 0;
let accelerationY = 0.7;

function update() {
	velocityY = velocityY + accelerationY;
	positionY = positionY + velocityY
	
	if (positionY >= heightC - radius) {
		velocityY = -8;
	}
}
window.addEventListener('scroll', function() {
	const scrollPosition = window.scrollY;
	positionX = 2*scrollPosition;
});
console.log(positionX);
function draw() {
	context.clearRect(0,0,width,heightC);
	context.beginPath();
	context.arc(positionX, positionY, radius, 0, Math.PI * 2, false);
	context.fillStyle = "black";
	context.fill();
	context.closePath();

	context.fillRect(0,0,30,heightC);
}
function animate() {
	update();
	draw();
	requestAnimationFrame(animate);
}
animate();