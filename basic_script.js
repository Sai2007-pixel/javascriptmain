console.log("external file")
//single line cmnt
/*
multi line cmnt
*/
console.log("oreyyyyyy")
var a //only deleration
a=10 //initailisation
a=12 //assigning
var a=50 //re-declaring and re initial
var a=100
console.log(a);
//scope
{
    var a=40
    console.log("inside block "+a)
}
//global scope
console.log("outside block "+a)
//var is a re declare reassign and reinitial and it is a global scope
let b;
b=20
b=24
console.log(b);
//scope
{
    let b=20
    console.log("inside block "+b)
}
console.log("outside block "+b)


const pi=3.142
//pi=2000 //no re-assignment
console.log(pi);//3.142
//scope 
{
    const pi=3.141599
    console.log("inside block "+pi)//3.141599
}
console.log("outside block "+pi)
//const cant be re-decleared,
//re-initial..&re-assign.. not possible
//it is BLOCK SCOPE
//only decleration its is not possible

//var Hoisting first initalize and declare it
x=200
var x
console.log(x);//200

y=200//let hoisting is not poss..
//let y  //to commented y becoz to remove error in  console 
console.log(y);//error

z=12 //const hoisting is not possikble
//const z 
//hoisting ->>let(no),const(no),var(yes)

//js is dynamically typed lang
let ab=12
ab="str"
//ab=true
console.log(ab);//true

//number
let num=123.456
console.log(typeof(num));//number
num="123"
console.log(typeof(num));//string
num=false
console.log(typeof(num));//boolean

let num1
console.log(num1);//undefined
console.log(typeof(num1));//undefined

num1=null
console.log(num1);//null
console.log(typeof(num1));//object

//escape characters
console.log('goo\\d,\"after\"noon')//goo\d,"after"noon
console.log(`good
after noon`)//new line

let name="abc"//
console.log(`good 
    afternoon` +name);
console.log(`good afternoon ${name}`);
