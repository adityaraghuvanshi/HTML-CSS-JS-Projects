let element = document.querySelectorAll(".element");

element.forEach(function (val) {
	val.addEventListener("mouseenter", function () {
		val.childNodes[3].style.opacity=1
	});
	val.addEventListener("mouseleave", function () {
		val.childNodes[3].style.opacity = 0;
	});
	val.addEventListener("mouseenter", function (location) {
		val.childNodes[3].style.left = location.x+"px";
		val.childNodes[3].style.top = location.y+"px";
	});
});
