// JavaScript를 사용하여 세 개의 숫자를 입력받아, 각각의 숫자에 대해 다음의 연산을 수행한 후 결과를 출력하는 프로그램을 작성하세요:

let num1 = Number(prompt('첫번째 수'));
let num2 = Number(prompt('두번쨰 수'));
let num3 = Number(prompt('세번째 수'));

if(!Number.isNaN(num1) && !Number.isNaN(num2) && !Number.isNaN(num3)) {
  let sum = num1 + num2 + num3;
  let average = (num1 + num2 + num3) / 3;
  let max = Math.max(num1, num2, num3);
  
  console.log(`세 숫자의 합 : ${sum}, 세 숫자의 평균 : ${average}, 세 숫자중 가장 큰 수 : ${max}`);
} else {
  console.log('올바른 숫자 값이 아닙니다.');
}



