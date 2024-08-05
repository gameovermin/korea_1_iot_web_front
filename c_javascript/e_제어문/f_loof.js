// JS의 제어문

// ! 반복문(loop) : 동일한 코드 블록을 여러 번 실행할 수 있도록 하는 제어문

// + 배열(Array)

// let frults = ['apple', 'banana', 'cherry'];
// let numbers = [1,2,3,4,5];
// let boolean = [true, false];

// 요소에는 모든 타입의 데이터가 들어갈 수 있다.

// let js = ['자바스크립트', 123, true, null, undefined, [1,2,3]];

// 배열의 요소에 접근
// 배열명[인덱스 번호]

//console.log(js[2]); // true

// 배열의 길이를 확인
// length 속성을 사용하여 배열의 길이를 확인
// 배열명.length

// for (초기화식; 종료조건; 증감식) {
//   표현식의 결과가 참인 동안에 실행할 코드
// }

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// 별 찍기

// let stars = '';

// for (let i = 1; i < 6; i++) {
//   stars += '*';
//   console.log(stars);
// }

console.log('======================');

//행에 대한 반복 : 5번 실행


// for (let i = 1; i < 6; i++) {
//   let stars2 = '';
//   for (let j = 0; j < i; j++) {
//     stars2 += '*';
//   }
//   console.log(stars2);
// }

console.log('======================');
// 역순으로 별 찍기

// for (let i = 5; i >= 0; i--) {
//   let starts3 = '';
//   for (let j = 0; j < i; j++) {
//     starts3 += '*';
//   }  
//   console.log(starts3);
// }

// *****
// ****
// ***
// **
// *

// 행의 시작 시 공백이 부여 문자열 안에 ' ' 
// 각 행의 차례마다 그 개수의 별이 찍힘

for (let i = 1; i < 6; i++) {
  let space = '';
  let stars = '*';
  // 왼쪽 공백
  for (let j = 1; j < 6 - i; j++) { // 공백 : 4, 3, 2, 1, 0
    space += ' ';
  }
  for (let k = 1; k < i; k++) { 
    stars += '*';
  }

  console.log(space + stars);
}

//     *
//    **
//   ***
//  ****
// *****