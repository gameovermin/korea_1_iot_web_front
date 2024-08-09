// mathModule.js

// 사칙 연산의 함수를 정리
// add(더하기), subtract(뺴기), multiply(곱하기), divide(나누기)


export function add(num1, num2) {
  return num1 + num2;
}

export default function subtract(num1, num2) {
  return num1 - num2;
}

export function multiply(num1, num2) {
  return num1 * num2;
}

export let divide = (num1, num2) => {
  if (num2 !== 0) {
    return num1 / num2;
  } else {
    return console.log('0으로 나눌 수 없음');
  }
}
