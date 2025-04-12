console.log("objects in JS");
let person={
    name:"SAI",
    age:19,
    mobile:9948024366,
}
console.log(person);

//("for in loop");
console.log("for in for objects");
for(let i in person){
    console.log("key->" +i);//keys
    console.log("value->" +person[i]);//values
    console.log("key & value pair->" +i,person[i]);//keys
}
console.log("accessing ele in obj");
//dot mtd->obj_name.key->value
console.log(person.mobile);//value of moblie
console.log("bracket mthd");//brack mtd->obj_name["key]->value
console.log(person["age"])//20

console.log("updating ele in obj");
person.age=25;
person.name="chandra";
console.log("add ext fields");
person.city="nellore";

console.log("deleting obj in ele");
delete person.name;//del obj_el.key
console.log(person);

console.log("object in object");

let PARUL={
name:"PARUL UNIVERSITY",
location:"VADODARA",
pin:391760,
student:{
    stu_name:"sai chandra",
    stu_roll:2403031461225,
    stu_mark:10
}

}
console.log(PARUL)
console.log(PARUL.location)
console.log(PARUL.student.stu_roll)

console.log("creating obj with new keyword");
let person1=new Object();
person1.age=19;
person1.name="sai";
console.log(person1);
