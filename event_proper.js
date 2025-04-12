console.log("button");
let btn=document.getElementById(`btn`)
console.log(btn);
btn.onclick=()=>{
    confirm("click button");
    alert("DANGER SYSTEM HACKED");
}

console.log("double clicked");
console.log(btn1);
document.getElementById("btn1").ondblclick=()=>{
    alert("button double clicked")
}

document.getElementById("input").onchange=function(){
    //alert("input changed")
alert(`input changed to `+this.value)//anonymous fn used

}

let form=document.getElementById(`form`)
let name=document.getElementById(`name`)
form.onsubmit=()=>{
    alert("form submitted"+name.value)
}