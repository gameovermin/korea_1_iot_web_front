// ! d_operator02.js

let bool1 = true;
let bool2 = false;

console.log(bool1 && bool2);  //false
console.log(bool1 || bool2);  //true

console.log(!bool1);  //false
console.log(!bool2);  //true
console.log(!bool1 && !bool2);  //false
console.log(!bool1 || !bool2);  //true


console.log("============================");

let age = 18;
let beverage = age > 20 ? 'beer' : 'juice';
console.log(beverage); // juice

let isMember = false;
let discount = isMember ? '10%' : '5%';
console.log(discount); // 5%


console.log("========================");
// 삼항 연산자의 중첩

// let age1 = Number(prompt('나이'));
let age1 = 17;
let identity = age1 > 20 ? '성인' : (age1 > 13 ? '청소년' : '어린이');

console.log(identity);

console.log("==================");

let firstName = 'choi';
let lastName = 'yunseong';

console.log(firstName + ' ' + lastName); // choi yunseong

console.log("==========================");

let objectData = {};

let functionData = () => {

}

console.log(typeof(objectData));
console.log(typeof(functionData()));