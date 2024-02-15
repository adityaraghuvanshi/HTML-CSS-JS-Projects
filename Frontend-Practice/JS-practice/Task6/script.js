let arr = [
	{
		profilePicture: "./images/andy-holmes-D6TqIa-tWRY-unsplash.jpg",
		story: "./images/andy-holmes-D6TqIa-tWRY-unsplash.jpg",
	},
	{
		profilePicture: "./images/edgar-nKC772R_qog-unsplash.jpg",
		story: "./images/edgar-nKC772R_qog-unsplash.jpg",
	},
	{
		profilePicture: "./images/gwen-weustink-I3C1sSXj1i8-unsplash.jpg",
		story: "./images/gwen-weustink-I3C1sSXj1i8-unsplash.jpg",
	},
	{
		profilePicture: "./images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg",
		story: "./images/karsten-winegeart-oU6KZTXhuvk-unsplash.jpg",
	},
	{
		profilePicture: "./images/ray-hennessy-xUUZcpQlqpM-unsplash.jpg",
		story: "./images/ray-hennessy-xUUZcpQlqpM-unsplash.jpg",
	},
	{
		profilePicture: "./images/sid-balachandran-_9a-3NO5KJE-unsplash.jpg",
		story: "./images/sid-balachandran-_9a-3NO5KJE-unsplash.jpg",
	},
];
let stories=document.querySelector(".stories")
let clutter="";
arr.forEach(function (element,idx) {
    clutter+=`<div class="story"><img id=${idx} src="${element.profilePicture}" alt=""></div>`
});
stories.innerHTML=clutter;

stories.addEventListener("click",function(details){
    let value=arr[details.target.id].story;
    document.querySelector(".full-screen").style.display="block";
    document.querySelector(".full-screen").style.backgroundImage=`url(${value})`;

    setTimeout(function(){
        document.querySelector(".full-screen").style.display="none";

    },2000)
})