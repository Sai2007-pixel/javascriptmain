console.log("arthimatic operat");
let a=10
let b=20
console.log(a+b)//30
console.log(a-b)//-10
console.log(a*b)//200
console.log(a/b)//0.5
console.log(a%b)//10 //if a<b then a is lead 

console.log("string addition");
let num1=123
let num2="23"
console.log(num1+num2);//12312 + high prefer in string 
console.log(num1-num2);//100   high prefer in num 
console.log(num1*num2);//2829   "          "
console.log("string is taken");
num1=123
num2="str"
console.log(num1+num2);//123str
console.log(num1-num2);//NAN-not a num 
console.log(num1*num2);//"      "

console.log("logical opera &");
console.log(true&&false);
console.log(false&&false);
console.log(true&&true);
console.log(false&&true);
console.log("logical or"); //or-> 1+0 =1
console.log(true || false);
console.log(false|| true);
console.log(true  || true);
console.log(false || false);

console.log("relational opera");
//>,<,>=,<=,===,!==
console.log(3>5);//false
console.log(3>=3);
let x=123
let y=123
console.log(x==y);//true
console.log(x===y);//trur
x=123
y='123'//it checks data type we took y as str and num not equal to str
console.log(x===y);//false
 
console.log("bitwise oper");
//& (and),|(or),~(not,^(xor))
console.log(9&12);//8
console.log(9^12);//5
console.log(9|12);//13
console.log(~12);//-13
console.log(4>5 && 5>=14);//false

console.log("shift oper");
//(<<--left shift and >>--right shift)
console.log(2<<3);//16
//L.S a<<b=a*(2^b)=>2*2^3=>16
//R.S a>>b=>a/(2^b)=>4/2^2=1
console.log(4>>2);//1

console.log("unary oper");
//pre-inc,pre-dec,post-inc,post_dec
let number=2
console.log("pre-inc/dec");
console.log(++number);//3
console.log(-- number);//2
console.log("post-inc/dec");
console.log(number++);//2(screen) mem(3)
console.log(number--);//3(screen) mem(2)
//example
let q=5
console.log(q++ - --q + q++ + q-- + q++ + ++q + --q + ++q);//36






