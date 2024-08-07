// ! 문제 1
// add(함수 선언식)
// subtract(함수 표현식)
// multiply(화살표 함수)

let a = 10;
let b = 5;

function add(a, b) {
  return a + b;
}

const subtract = function(a, b) {
  return a - b;
}

const multiply = (a, b) => a * b;

console.log(add(a, b));
console.log(subtract(a, b));
console.log(multiply(a, b));


// ! 문제 2

function calculatePay(hours, rate) {
  let salary = 0;
  if(hours > 160) {
    const over = (hours - 160) * 1.5;
    salary = (160 * rate) + (over * rate);
  } else {
    salary = hours * rate;
  }
  return salary;
}

console.log('직원 A 급여 : ', calculatePay(172, 20));
console.log('직원 B 급여 : ', calculatePay(160, 22));
console.log('직원 C 급여 : ', calculatePay(180, 18)); 