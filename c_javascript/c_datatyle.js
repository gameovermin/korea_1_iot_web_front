let str1 = 'hi';
let str2 = "'hihi'";
let str3 = `hihihi`;

let name = 'ㅎㅇ';

console.log('안녕하세요 저는 ' + name + '입니다');

console.log(`${name}`);

console.log(`${44*2}`);

// 일반 따옴표는 줄바꿈인식 X

let multiLine = `
  ㅎㅇ
  반갑고
  어서오고
`;

console.log(multiLine);

// typeof 연산자 => 자료형을 출력하는 연산자

let num = 10;
let str = `dd`;

console.log(typeof(num));
console.log(typeof(str));

let bool1 = true;

let bool2 = false;

console.log(typeof(bool1));
console.log(typeof(bool2));

// let hello = null; // null
let hello; // undefined


// console.log("hello", hello);

console.log((typeof value === 'object' && !value) ? 'null' : 'not null');
// value 변수의 타입이 'object'이면서 (and) 값이 존재하지 않을 경우 'null'을 출력하고 아니면 'not null' 을 출력함

let notANumber = '안녕하세요'; //문자열
let numString = '1234';

console.log(Number(notANumber)); 
//NaN (Not A Number) : 숫자형이 아니라서 변환할 수 없음

console.log(numString);
// console.log(Number(numString));

// 1234

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));