//creating
let str=" good afternoon"
console.log(str);
console.log("length->"+str.length);


//Good Afternoon
console.log("indexof mtd");
console.log(str.indexOf("m"));
console.log(str.indexOf("g"));
console.log(str.indexOf("er"));
console.log(str.indexOf("n"));


console.log("last index mtd");//took arr seq
console.log(str.lastIndexOf("o"));//12
console.log(str.lastIndexOf("a"));


console.log("search mtd");
console.log(str.search("good"));//0
console.log(str.search("s"));//-1
console.log(str.search("good afternoon"));//0


console.log("includes mtd");
console.log(str.includes("good"));//t
console.log(str.includes(" "));//t
console.log(str.includes("afternoon"));//t
console.log(str.includes("Good afternoon"));//f


//" good afternoon"
console.log("starts with mtdf")
console.log(str.startsWith("good"));//f
console.log(str.startsWith(" good"));//t
console.log("ends with mtdh");
console.log(str.endsWith("on"));//t
console.log(str.endsWith("good"));//f
console.log(str.endsWith(" good after"));//f


//" good afternoon"
console.log("str manipultion");
console.log(str.toUpperCase());
console.log(str.toLowerCase());


/*let str22="       Hello! Pravallika   i    love u   "
console.log("trim mtd");
console.log(str22);
console.log(str22.trim());//removing space first and last
*/

let str1="  Hello,       world!   "
console.log("trim mtd");
console.log(str1);
console.log("OG str length "+str1.length);


let t_str=str1.trim()
console.log(t_str);
console.log("trimmed str length " +t_str.length);//
console.log("trim str length"+str1.trim().length);//


console.log("slice mtd");
let str2="Good, Morning!!"
console.log(str2.slice());//og str
console.log(str2.slice(1,6))//ood, ////1 to 5
console.log(str2.slice(6,2));//no output
console.log(str2.slice(6));//morning!!
console.log(str2.slice(-3));//g!! -3 to rig from end
console.log(str2.slice(-3,-6));//no output
console.log(str2.slice(-6,-3));//nin -6 to -4
console.log(str2.slice(0));//og str
console.log(str2.slice(1));//ood, morning!!
console.log(str2.slice(7));//orning!!
console.log(str2.slice(3,7));//3 to 6//d, M
console.log(str2.slice(-7,-1));//-7 to -2//rning!


console.log("substring mthd");
console.log(str2.substring());//og str
console.log(str2.substring(1));
console.log(str2.substring(2,5));//2 to 4
console.log(str2.substring(0));
//substring mtd will not work on nege index valv
console.log(str2.substring(-6));//og
console.log(str2.substring(-2,-6));//og


console.log("substr mtd");
console.log(str2.substr());//og
console.log(str2.substr(0,5));//good
console.log(str2.substr(5,5));//" morn"
console.log(str2.substr(2,0));//no out
console.log(str2.substr(2,7));//3 to 7
console.log(str2.substr(0,0));//no out
console.log(str2.substr(3,9));//4 to 9
console.log(str2.substr(10,6));//upto 10 and  display ing!! is 5,rem 1ended
console.log(str2.substr(-2,2));//last 2 char
console.log(str2.substr(-3,7));//last 3 chara
console.log(str2.substr(4,0));//no out


console.log("replace mtd");
console.log(str2.replace("ood","Happy"));//GHappy Morning
console.log(str2.replace("Morning","Happy"));//Good Happy

let str3="Good Morning & Good Afternoon"
console.log(str3.replaceAll("Good","Happy"));//Happy Morning & Happy Afternoon

console.log("using REg Expressions");
console.log(str3.replace(/Good/g,"Happy"));//global and case sensetive
console.log(str3.replace(/goOD/i,"Happy"));//not global but case sensitive
console.log(str3.replace(/GooD/gi,"happy"));//both










