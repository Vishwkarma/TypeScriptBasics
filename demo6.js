"use strict";
// function add (a:number,b:number){
//     return a+b;
// }
// const res=add(2,3);
// console.log(add(2,3));
// function add (a:number,b:number):string{
//     const res=a+b;
//   console.log(`Inside the function`,res);
//      return;
// }
// const res=add(2,3);
// console.log(res);
function checkNumber(a) {
    if (typeof a === "number") {
        return true;
    }
    else {
        return false;
    }
}
var res = checkNumber("2");
console.log(res);
