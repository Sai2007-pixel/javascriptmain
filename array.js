//LOOPS
let arr=[1,2,4,5,6,7]
console.log(arr);
console.log("for of loop for arrays");

for(let i of arr){
    console.log(i*2);//multi in 6 ele *2
}
console.log("arr length");
console.log(arr.length);
console.log("arr indexof");
console.log(arr.indexOf(2));//1
console.log(arr.indexOf(3));//value not there so -1
console.log(arr.indexOf(6));//4
console.log(arr[4]);//6

console.log("for ex fruits"); 
let fr=["mango","apple","banana","jack fruit","orange"];
console.log(fr);//all in a seq
console.log("fr indexof");
console.log(fr.indexOf("apple"));//1
console.log(fr.indexOf("jack fruit"));//3
console.log(fr[3]);//jack fruit
console.log("updating items")
fr[6]="papaya"
fr[7]="kiwi"
console.log(fr)
console.log("deleting");
delete fr.mango


console.log("splice mthd")
let a=[1,209,false,"black", 2.0]
console.log(a);
//index no of ele to remo
a.splice(0,1)
console.log(a);
a.splice(3,1)
console.log(a);
a.splice(1,2);
console.log(a);

let s=[2,3,4,5,6,1,7,8,9]
s.splice(2,3,3,5)//index no of ele to del no of ele to add
console.log(s);//[2,3,3,5,1,7,8,9] 
let h=[4,5,6,7,8,9,2,1,5,8,2]
h.splice(2,6,5,3,9);
console.log(h)

//adding &deleting ele in end
console.log("push mtd");
s.push()
console.log(s);
s.push("hello");
console.log(s);
s.push(100);
console.log(s)

//removing last num
s.pop()
console.log(s);   
s.pop()
console.log(s)// [2, 3, 3, 5, 1, 7, 8, 9]

console.log("add and delete at starting");
//shift(delete)&unshift(add)
//2,3,5,9,8,9
s.shift()
console.log(s);
s.unshift(true)
console.log(s);//true,3,5,9,8,9

let arr1=[1,3,5,7,9]
let arr2=[2,4,6,8,10]
console.log("concat mthd add 2 arr");
let arr3=arr1.concat(arr2)
console.log(arr3);

console.log("spread operator we can add the req ele");
console.log(...arr1,...arr2,90,45,65,"abc");

console.log("reverse mthd");
arr.reverse()
console.log(arr2);// [10, 8, 6, 4, 2, 9, 7, 5, 3, 1]









