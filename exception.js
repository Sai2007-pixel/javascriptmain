/*exception .js
try{
    //code with error
}
catch(error){
    //error
}*/
                                         
console.log("exception.js");
try{
    let a=10/0
    console.log("from try blck");
    console.log(a);
}
catch(error){
console.log("from catch blck");

console.log("error");
}
try{
    const num=UndefinedValue
    console.log("from try blck");
    console.log(num);
}
catch(error){
    console.log("from catch blck");
    console.error("Error:"+error);
}/*
console.log("done with try and catch");

let num=292892887
console.log(typeof(num));//number
let n=292892887n
let m=2n
console.log(typeof(n));//bigint
console.log(typeof(m));//bigint
*/

finally{
    console.log("finally work always----");

}
console.log("sai");

let num=292892887
console.log(typeof(num));//number
let n=292892887n
let m=2n
console.log(typeof(n));
console.log(typeof(m));
