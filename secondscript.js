window.addEventListener('scroll', function() {
	const description = document.getElementById('description');
	const desc = document.getElementById('desc');
	let opacity = 0;

    const scrollPosition = window.scrollY;
	console.log(scrollPosition + "Scroll Position");

	if (scrollPosition > 30 && scrollPosition < 199) {
		opacity = (scrollPosition - 30)/169;
	} else if (scrollPosition <= 270 && scrollPosition >= 199) {
		opacity = 1;
	} else if (scrollPosition > 270) {
		opacity = (340 - scrollPosition)/70;
	}
	if (opacity <= 0) {
		opacity = 0;
	}
	let opacity2 = opacity - 0.2;
	if (opacity2 < 0) {
		opacity2 = 0;
	}
	console.log(opacity2 + "Opacity 2");
	desc.style.background = 'rgba(119, 73, 148,' + opacity2 + ')';
	description.style.opacity = opacity;
});