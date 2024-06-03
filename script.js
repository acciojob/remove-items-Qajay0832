//your JS code here. If required.
let button=document.getElementById("button");
let color=document.getElementById("colorSelect")
button.addEventListener("click",func)
function func(){
	color.remove(color.value)
}
