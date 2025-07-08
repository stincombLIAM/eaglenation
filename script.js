window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const title1 = document.getElementById('titlebar1');
    const title2 = document.getElementById('titlebar2');
	const description = document.getElementById('description');
	const desc = document.getElementById('desc');
	const insta = document.getElementById('insta');
	const face = document.getElementById('face');
	let opacity = 0;
	let opacity2 = 0;

    const scrollPosition = window.scrollY;
	console.log(scrollPosition + " Scroll Position");

    header.style.height = (400 - scrollPosition/1.2) + 'px';
	title1.style.margin = (-scrollPosition) + 'px';
	insta.style.marginTop = 400 - (scrollPosition) + 'px';
	insta.style.boxShadow = "0px " + ((scrollPosition - 273)/4.3) + "px black";
	face.style.marginTop = 400 - (scrollPosition/2) + 'px';
	face.style.boxShadow = "0px " + ((scrollPosition - 345)/5.3) + "px black";
	header.style.backgroundPosition = (scrollPosition*(-2)) + 'px -200px';
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
	if (opacity <= 0) {
		opacity2 = 0;
	} else {
		opacity2 = opacity - 0.2;
	}
	console.log(((scrollPosition - 273)/3.5) + " Calculation");
	desc.style.background = 'rgba(119, 73, 148,' + opacity2 + ')';
	description.style.opacity = opacity;	
});