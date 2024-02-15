
window.addEventListener("mousemove", function (loc) {
    let rectangle = document.querySelector(".rectangle");
	let location = gsap.utils.mapRange(
		0,
		window.innerWidth,
		100 + rectangle.getBoundingClientRect().width / 2,
		window.innerWidth - (100 + rectangle.getBoundingClientRect().width / 2),
		loc.x,
	);
	gsap.to(rectangle, {
		left: location + "px",
		ease: Power3,
	});
});
