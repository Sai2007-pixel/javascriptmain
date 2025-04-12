/*
block of code written @ 1 place to perform specific task
function fun_name(parameters){
    fun_body
    return stat
}
fun_name(arguments)*/

console.log("not accepting para & no ret");
function greet(){
    console.log("sai");

}
greet()//sai
greet()//fn call

function add(a,b){
    console.log("accept para but no retu");
console.log(a+b);//6
}
add(2,4)//f call


console.log("not accept para but retu");
function sub(a,b){
  

    return a-b
}
let ans=sub(10,29)
console.log(ans);//-19


console.log("accept para & return");
function mul(a,b){
    return a*b
}
let res=mul(5,4)
console.log(res);//20


/*let name1="sai";//directly displays name
let name2="chandra"
function fun(name1,name2) {
    console.log("hello "+name1+" "+name2);  
}
fun(name1,name2)//hello sai chandra*/

/*let name1=prompt("enter u name")//ask name
let name2=prompt("enter u last name");
function fun(name1,name2) {
    console.log("hello "+name1+" "+name2);  
}
fun(name1,name2)//hello sai pravallika
*/


let div=function(a,b){
    console.log('anonymous function which does nt hv name');
    console.log(a/b);
}
div(34,2)//17

/*
//from arrow fun
let a_fun=(a,b)=>{
   
    console.log("from arrow fun");
    console.log(a+b);
}

a_fun(2,9) //11


//math.squ(num) using arr fun
let a_fun=(a)=>{
   
    console.log("from arrow fun");
    console.log(Math.sqrt(a));
}

a_fun(16)//4
*/
console.log("Math srqt");
let sq=(a)=>{
    return Math.sqrt(a)
}
console.log(sq(81))//9


console.log("Implicit return");
let square=(x)=>x*x
console.log(square(25));//625

/* console.log("call back fun");
let fn=()=>{
    console.log("this is arrow fun after 3 sec");
}
setTimeout(fn,3000)//dis aft 3sec
*/
function fn(name){
    console.log("the name is "+name+" after 3 sec");
}
setTimeout(fn,3000,"saiiii")//saii disp

console.log(`for each loops weorks on array used in call back fn`);
let a=[1,2,3,4,5,6,7];
a.forEach(function(num){
console.log(num);    
});









