// ! 문제1

// let name = String(prompt('이름'));
// let age = Number(prompt('나이'));

// console.log(typeof(name));
// console.log(typeof(age));


// ! 문제2

// const num1 = Number(prompt('첫번쨰 수'));
// const num2 = Number(prompt('두번쨰 수'));

// console.log('두 수의 합은 ' + (num1 + num2) + ' 입니다');

// 연산제 예제

// ! 문제3 

// const PI = 3.14;
// let radius = 10;
// let area = PI * radius * radius;

// console.log("원의 넓이", area);

// ! 문제4 

// const inch = 10;
// let cm = inch * 2.54;
// console.log(cm);


// ! 문제5
// let number = Number(prompt("숫자"));
// let check = number % 2 ? '홀수' : '짝수';

// console.log(check);

// ! 문제6

// let total = 0;
// total += 5;
// total *= 3;
// total -= 2;
// console.log(total);

// ! 문제 7
// 윤년의 조건
// - 연도가 4로 나누어 떨어지는 해는 윤년입니다.
// - 그 중에서 100으로 나누어 떨어지는 해는 윤년이 아닙니다.
// - 하지만 400으로 나누어 떨어지는 해는 다시 윤년이 됩니다.

// 윤년일 경우 : randomYear년은 윤년입니다.
// 윤년이 아닐 경우 : randomYear년은 윤년이 아닙니다.

// let randomYear =2024;

// let isLeapYear = (randomYear % 4 === 0 && randomYear % 100 !== 0) || (year % 400 === 0);

// if (isLeapYear) {
//   console.log(`${randomYear}년은 윤년입니다.`);
// } else {
//   console.log(`${randomYear}년은 윤년이 아닙니다.`);
// }