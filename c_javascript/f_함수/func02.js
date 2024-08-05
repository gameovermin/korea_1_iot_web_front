// 자바스크립트 함수 구조

// 매개변수 & 인자 (parameter, argument)

// # 1. 매개변수(파라미터, parameter)
// : 함수를 정으하고 호출할 때 함수에 데이터를 전달하는 방식 (변수) - 선언
// : 함수를 호출 시에는 괄호 안에 인수(arguument)를 넣어서 전달 - 호출


// # 2. 인자(인수, 아규먼트, argument)
// : 함수를 호출할 때 전달하는 실제 값
// : 함수 호출마다 다른 데이터 전달이 가능


function add(a, b) {
  console.log(a + b);
}

add(3, 4); // 소괄호 안의 3, 4는 인자값

// ? 자바스크립트에서의 파라미터와 아규먼트 사용
// : 두 가지의 수가 무조건 일치할 필요 X

// cf. 변수를 선언하고 초기화하기 이전의 타입 : undefined

function log(a) { // 파라미터 1개
  console.log(a);
}

log();  // undefined - 전달하지 않은 파라미터의 값은 undefined로 지정
log('hello'); //  hello
log('안녕하세요 ', '만나서 반갑습니다');  // 안녕하세요 
// - 여러개의 파라미터 & 인자값 나열 시 콤마(,) 로 구분해서 나열 가능
// - 지정된 수의 파라미터 이상의 인수는 읽히지 않음

function introduce (name, age) {
  console.log(`${name} is ${age} years old`);
}

introduce('cys', 30);
introduce(30, 'cys');
// 매개변수와 인자는 차례대로 묶임

// # 3. 반환값(return, 리턴값)
// : 입력받아 처리한 결과를 '반환'
// : return 키워드를 사용하여 반환할 데이터를 지정 가능

// >> 함수 내에서 return 키워드 사용 시
// , return이 읽히면 함수의 실행을 즉시 중단하고 return 뒤의 값을 반환

function subtract(a, b) {
  let result = a - b;

  return result;
}

let outCome = subtract(10, 7);  // 반환된 값을 outCome 변수에 저장
console.log(outCome); // 3
console.log(subtract(5, 3)); // 2

// ? cf) return이 없는 함수는 실행 시 undefined를 반환
// >> 일반적으로 즉시 콘솔 출력 시 사용

// 연습 문제

function square1 (x) {
  let result = x * x;
  return result;
}

const square2 = function(x) {
  return x * x;
}

// const square3 = (x) => {
//   let result = x*x;
//   return result;
// }

const square3 = x => x * x;``

let result1 = square1(5);
let result2 = square2(6);
let result3 = square3(7);

console.log("result1 : ", result1);
console.log("result2 : ", result2);
console.log("result3 : ", result3);
