let imageContainer = document.querySelector(".image-container");
let heartButton = document.querySelector("i");

function likeImage() {
	heartButton.style.transform = "translate(-50%,-50%) scale(1)";
	heartButton.style.opacity = 0.7;
	console.log("Clicked");
	setTimeout(function () {
		heartButton.style.opacity = 0;
	}, 400);

	setTimeout(function () {
		heartButton.style.transform = "translate(-50%,-50%) scale(0)";
	}, 400);
}

imageContainer.addEventListener("dblclick", likeImage);
