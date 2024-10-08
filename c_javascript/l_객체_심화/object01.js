// ! 자바스크립트 내장 객체

// # 1. Number 객체의 기본 메서드

// cf) 기본 자료형 number

// Number - 자바스크립트 내부에 직접 정의되어 있는 객체(데이터)
// : 수치형 데이터를 처리하는 메서드를 제공

//& 1) toFixed()
// : 소수점 이하 N자리까지만 출력 (반올림)

let num = 123.4567;
console.log(num.toFixed(3)); // 123.457
console.log(num.toFixed(5)); // 123.45670
console.log(num.toFixed()); // 123

// 2) isNaN(), isFinite()
// : 각각 NaN인지 Infinity인지 확인

// >> Number 객체에 바로 적용, 인자값으로 확인할 데이터를 삽입


let notNum = Number('숫자로 변환할 수 없는 값');

console.log(notNum);

console.log(notNum === NaN);  // false: NaN 데이터는 ㅣㅂ교연산자 사용이 불가

console.log(Number.isNaN(notNum)); // true



// Infinity(양의 무한대), -Infinity(음의 무한대)
// cf) 양수 또는 음수를 0으로 나누면 각각의 무한대 수가 생성됨


console.log(10 / 0);  // Infinity
console.log(-10 / 0);   // -Infinity


let infinity = 10 / 0;
let minusInfinity = -10 / 0;

// in >> not
// isFinite : 유한한 숫자일 경우 true, 무한의 숫자일 경우 false

console.log(Number.isFinite(infinity));   //  false
console.log(Number.isFinite(minusInfinity));    //  false

console.log(Number.isFinite(10));   //  true

// # 2. String 객체의 기본 메서드

// & 1) trim()
// : 문자열 양족 끝의 공백 (띄어쓰기, 줄바꿈 등) 을 없애는 메서드

let stringA = `
  하이요 
  만나서 
  반갑습니다


`;

console.log(stringA);

console.log('trim()');
console.log(stringA.trim());

// & 2) split()
// : 문자열을 특정 기호로 자르는 메서드 >> 배열로 반환


let manyData = `
  생년월일
  1999.12.20
  2000.09.22
  2001.11.04
  2002.06.30
`;

console.log(manyData);

manyData = manyData.trim();

// 줄바꿈으로 자르기
manyData = manyData.split('\n');

console.log(manyData);

// 배열을 순회하여 각 문자열마다 공백을 제거
manyData = manyData.map(line => line.trim());

console.log(manyData);

/*
[
  '생년월일',
  '  1999.12.20',
  '  2000.09.22',
  '  2001.11.04',
  '  2002.06.30'
]
*/

// 배열 내부의 문자열을 ,(쉼포)를 기준으로 나누기

manyData = manyData.map(line => line.split(','));

console.log(manyData);  // 2차원 배열 
// [ '생년월일', '1999.12.20', '2000.09.22', '2001.11.04', '2002.06.30' ]

// & 3)length
let stringC = '  hello dd  dd 1- 2';
console.log(stringC.length);    // 19


// & 4) toUpperCase(), toLowerCase()

