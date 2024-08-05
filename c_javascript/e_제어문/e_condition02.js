// 하나의 표현식의 값을 확인하고 해당값과 일치하는 case문의 코드 블록을 실행

// switch (식) {
//   case 값1 : 
//     식이 값 1과 일치할 경우
//   case 값2 : 
//     식이 값 2과 일치할 경우
//   case 값3 : 
//     식이 값 3과 일치할 경우
//   case 값4 : 
//     식이 값 4과 일치할 경우
//   case 값5 : 
//     식이 값 5과 일치할 경우
//   ...
//   default :
//     식이 어떤 값과도 일치하지 않을 경우 실행
// }

// let frult = 'banana';

// switch (frult) {
//   case 'banana': 
//     console.log('바나나');
//     break;
//   case 'apple': 
//     console.log('사과');
//     break;
//   case 'grape': 
//     console.log('포도');
//     break;
//   default :
//     console.log('과일이 아님');
// }

let grade = 85;

if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else {
  console.log("F");
}

switch (true) {
  case (grade < 0 || grade > 100):
    console.log("범위가 유효하지 않음");
    break;
  case (grade >= 90) :
    console.log("A");
    break;
  case (grade >= 80) :
    console.log("B");
    break;
  case (grade >= 70) :
    console.log("C");
    break;
  case (grade >= 60) :
    console.log("D");
    break;
  default :
    console.log("F");
    break;
}

let gradeCheck = grade < 0 || grade > 100 
? '유효한 점수가 아님' : grade >= 90 
? "A" : grade >= 80 
? "B" : grage >= 70 
? "C" : grade >= 60 
? "D" : "F";
console.log(gradeCheck);

true ? console.log('출력 a') : console.log('출력 b'); // '출력 a'
false ? console.log('출력 b') : console.log('출력 a'); // '출력 ㅁ'
true || console.log('출력 a'); // 출력 x
true && console.log('출력 a'); // '출력 a'

// 조건문 Best Practice

// 1. 비교 연산자 사용 시 '==' 대신 '===' 사용 권장

console.log(0 == false); // true
console.log(0 === false); // false

// 2. 변수에 대한 조건 활용 시 일치/불일치 여부를 생략

let isTrue = true;

// if (isTrue === true) console.log('isTrue 는 참이다');
if (isTrue) console.log('isTrue 는 참이다');

// if (isTrue !== true) console.log('isTrue 는 거짓이다');
if (!isTrue) console.log('isTrue 는 거짓이다');
