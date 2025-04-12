document.body.style.backgroundColor="orange"
document.write("<h1>hello Saii</h1>")
document.body.style.color="white"

console.log("selectors in Js");
console.log("GET BY ELEME")
let a=document.getElementById("head")//h1
console.log(a);
a.style.color="red"

//
//
console.log("get eleme by cls");
let b=document.getElementsByClassName(`cls`)
console.log(b);
b[0].style.color="blue"
b[1].style.color="black"
for(let i=0;i<b.length;i++){
    b[i].style.fontSize="20px";
}

//get element by tag-->HTML collection
console.log("get elem by tag name");
let c=document.getElementsByTagName(`h2`)
console.log(c);
c[0].style.backgroundColor="green"
c[1].style.backgroundColor="blue"//block complete blue

//for i need text decoration as underlime
for(let i=0;i<c.length; i++){
 c[i].style.textDecoration="underline"
}
//query selec returns html eleme
console.log("query selector");
let d=document.querySelector(`h5`)
console.log(d)
d.style.backgroundColor="gold"
d.style.fontFamily="cursive"
d.style.fontSize="50px"
d.style.color="black"

console.log("query selec by id");
let e=document.querySelector(`#head1`)
console.log(e);
e.style.color="white"
e.style.backgroundColor="purple"

console.log("query selec by CLASS");
let f=document.querySelector(`.class`)
console.log(f);
f.style.color="white"
f.style.backgroundColor="purple"

//qyry selector all-> node list 
console.log("query selector all");
let g=document.querySelectorAll(`.q_cls`)
console.log(g);
g[0].style.color="red"
g[1].style.color="yellow"
//both UPpercase
for(let i=0; i<g.length; i++){
    g[i].style.textTransform="uppercase"
}

