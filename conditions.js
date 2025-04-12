/*let num=4
if (num>0) {
    console.log("number is +ve");
}
else if(num<0){
    console.log("number is -ve");
}
else{
    console.log("number is zero");
}
*/

//let num=prompt("enter a num")
/*let num=4
if (num>0) {
    console.log("number is +ve");
}
else if(num<0){
    console.log("number is -ve");
}
else{
    console.log("number is zero");
}*/

let num="dte"
if (num>0) {
    console.log("number is +ve");
}
else if(num<0){
    console.log("number is -ve");
}
else if(num===0){
    console.log("number is zero");//for this code we added 3 equals
}
else {
    console.log("invalid input");
}

//switch state
console.log("switch statement");
//let day=prompt("enter a number");//invalid day prompy cut 42
//let n_day=number(day)//n_day=number
let day=1
switch(day){
    case 1:
        console.log("monday");
        break;
     case 2:
         console.log("tuesday");
         break;
     default:
        console.log("invalid day");
        break;
}

let month="jan"
switch(month){
    case "jan":
        console.log("january");
        //break;   
        case "feb":
            console.log("febuary");
            break;
            case "mar":
                console.log("march");
                break;
                default:
                    console.log("invalid month");
                    break;
}

//ternary operat
//2 and 3 operands
/* (condn)? true_stat : false_stat */
console.log("ternary operator");
//let age=20
let hell=20
let msg=(hell/2)? "even" : "odd"
//let msg=(age>18)? "adult" : "child"
console.log(msg)

let num1=23
let s_num=num1.toString();
console.log(s_num);//23 str
console.log(typeof(s_num));//str

console.log("exponential mthod");
let a=2.834
console.log(a.toExponential());
console.log(a.toExponential(0));
console.log(a.toExponential(1));
console.log(a.toExponential(4));
let b=9.92787
console.log(b.toExponential(0));
console.log(b.toExponential(1));
console.log("fixed mthod after deci how many digi");
let d=9.94
console.log(d.toFixed(1));
console.log("precision mthd");
let k=19.9134
console.log(k.toPrecision());
console.log(k.toPrecision(1));
console.log(k.toPrecision(2));
console.log(k.toPrecision(4)); 

console.log("math functions");
//round->0.5 nor round up
//ceil->round up->move to nxt num
//trunc&floor-> int part
console.log("round offunction");
console.log(Math.round(2.0));
console.log(Math.round(2.6));
console.log("ceil fn- go to nxt number")
console.log(Math.ceil(2.0));
console.log(Math.ceil(2.4));
console.log(Math.ceil(2.8));
console.log("floor-round down");
console.log(Math.floor(5.8));
console.log(Math.floor(5.2));
console.log("trunc-method-only int part");
console.log(Math.trunc(7.3));
console.log(Math.trunc(7.18));
console.log(Math.trunc(2.8888));
console.log("max and min");
console.log(Math.max(20,0,45,200,99));
console.log(Math.min(20,0,45,200,99));
console.log("random");
console.log(Math.random()*10);//7.74867467
console.log(Math.random());//0.4565765
console.log(Math.floor(Math.random()*10));//6
