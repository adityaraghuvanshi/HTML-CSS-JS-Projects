let button = document.querySelector("#add-friend");
let requestStatus = document.querySelector("h5");
let checkCounter = 0;
function buttonFunction() {
	if (checkCounter == 0) {
		button.innerText = "Remove Friend";
		requestStatus.innerHTML = "Friends";
        checkCounter=1;
	}else{
        button.innerText = "Add friend";
		requestStatus.innerHTML = "Stranger";
        checkCounter=0;
    }
}

button.addEventListener("click", buttonFunction);
