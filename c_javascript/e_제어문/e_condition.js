// ! e_condition.js

// if문의 구조 (기본 형태)
// if (조건) {
//   조건이 참(true)일 떄 실행할 코드
// }

// let num = 10;
// if (num > 0) {
//   console.log("양의 정수");
// }

// let strData = '';
// let numData = 0;

// if (strData) {
//   console.log('빈 문자열은 false로 인식');
// }

// if (numData) {
//   console.log('0의 값은 false로 인식');
// }

// if문과 함께 사용
// if문의 주어진 조건이 거짓일 떄 실행할 코드 블록을 정의


// if (조건) {
//   조건이 참(true)일 떄 실행할 코드
// } else {
//   조건이 거짓일 떄 실행되는 코드
// }

// let num = -10;

// if (num > 0) {
//   console.log('양의 정수');
// } else {
//   console.log('양의 정수가 아님');
//   // ? 첫 번째 조건식에 부합하면서 두번쨰 조건식을 계산
//   if (num < 0) {
//     console.log('음의 정수');
//   } else {
//     console.log('0임');
//   }
// }

// if와 else 사이에 여러개의 조건을 추가

// if (조건1) {
//   조건1이 참인경우
// } else if (조건2) {
//   조건1이 거짓, 조건2가 참인경우
// } else if (조건3) {
//   조건1과 2가 거짓, 조건3이 참인경우
// } else {
//   모든 조건이 거짓인 경우
// }

// let num = -10;

// if (num > 0) {
//   console.log('양의 정수');
// } else if (num < 0){
//   console.log('음의 정수');
// } else {
//   console.log('0임');
// }

// 1. 실행 될 코드 블럭이 한 줄일 경우에만 코드 축약 가능
// if (number > 0) console.log('양수 0');
// else console.log('양수 x');

// 2. if문 형태의 로직들은 삼항 연산자로 변환이 가능
// 조건문의 경우 코드블록의 다양한 표현이 가능
// 삼항연산자의 경우 코드의 간결성과 {} 사용을 하지않아 다양한 활용 가능

// let age = 20;

// if (age < 13) {
//   console.log("어린이");
// } else if (age >= 13 && age < 20) {
//   console.log("청소년");
// } else {
//   console.log("성인");
// }

// let check = age < 13 ? "어린이" : (age >= 13 && age < 20 ? "청소년" : "성인");
// console.log(check);

