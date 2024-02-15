let main=document.querySelector(".main");
let cursor=document.querySelector(".cursor");

main.addEventListener("mousemove",function(cursorMove){
    cursor.style.left=cursorMove.x+"px";
    cursor.style.top=cursorMove.y+"px";
})