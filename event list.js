let btn=document.getElementById(`btn`)
let box=document.getElementById(`div`)
let h1=document.getElementById(`h1`)

h1.innerHTML="<i>IPL 2025</i>"
box.textContent="hover on btn"

btn.addEventListener("mouseover",()=>{
    box.style.backgroundColor="red"
})

btn.addEventListener(`click`,()=>{
    box.style.background=`#005fe3`//pink
    box.textContent="button clicked❤😁😜😎"
    btn.textContent="next->>"
    btn.style.background="rgb(200,20,130,0.7)"//blue
})
btn.addEventListener("mouseout",()=>{
    box.style.backgroundColor="orange"
    box.textContent="Bye ra 🐰😉" 
})
btn.addEventListener("mouseover",()=>{
    box.style.backgroundColor="pink"
    box.textContent="RCB😤 VS CSK😤"
})
btn.addEventListener(`click`,()=>{
    box.style.backgroundColor="lightblue"
    box.textContent="RCB won the match"
    btn.textContent="next=>>>"
    btn.style.backgroundColor="rgb(200,30,130,0.7)"

})
btn.addEventListener("mouseout",()=>{
    box.style.backgroundColor="light green"
    box.textContent="BETTER LUCK NXT TIME🤡👺"
})
document.addEventListener(`keypress`,function(event){
    console.log(event.key);
})

//create element with js

let newh1=document.createElement(`h1`)
newh1.textContent="heading from js"
console.log(newh1);
document.body.appendChild(newh1)
newh1.style.color="green"

