//your JS code here. If required.
let button=document.getElementById("button");
let color=document.getElementById("colorSelect")
button.addEventListener("click",func)
function func() {
    for(let i = 0; i < color.options.length; i++) {
        if(color.options[i].value === color.value) {
            color.remove(i);
            break;
        }
    }
}
