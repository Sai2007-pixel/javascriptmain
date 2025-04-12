const d =new Date();
console.log(d.getTime());
console.log(d.getDate());
console.log(d.getMonth());//starts 0-11
console.log(d.getFullYear());//starts yyyy
console.log(d.getHours());//starts from 0-23
console.log(d.getMinutes());//starts 0-59
console.log(d.getMilliseconds());//starts 0-999
console.log(d.getDay());//starrts from 0-6
console.log(d.getSeconds());//.0-59

console.log("set year");
d.setFullYear(2025,3,11);//y,m,d
console.log(d); 

/*let name=prompt("enter u name")
console.log("ur name is"+name);
confirm("Are U Intrested to Join Class");
alert("BUT YOU DONT HAVE ANOTHER OPTION")*/
