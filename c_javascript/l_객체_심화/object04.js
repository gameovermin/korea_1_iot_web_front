// ! 객체의 속성 존재 여부 확인

let object = {
  name : 'ddd',
  age : 11,
  job : 'qqqq'
}

// # 1. 객체 내부에 해당 속성 여부 확인

if (object.name !== undefined) {
  console.log('name 속성 O');
} else {
  console.log('name 속성 X');
}


// # 2. 조건문을 연산자로 간단하게 표시

// object.name
// object.hobby

// 1) 논리연산자(and, or, not)
// or 연산자
// >> 둘중 하나라도 true 면 true
console.log('or 연산자');

object.name || console.log('name 속성이 없습니다.');
object.hobby || console.log('hobby 속성이 없습니다.'); // hobby 속성이 없습니다.

!object.name || console.log('name 속성이 있습니다.');

// and 연산자
// >> 모두 true 여야 true
console.log('and 연산자');

object.name && console.log('name 속성이 없습니다.');

// ! 기본 속성 지정
// : 삼항 연산자

object.name 
= object.name !== undefined ? object.name : '이름을 알 수 없는 고객';

object.hobby 
= object.hobby !== undefined ? object.hobby : '취미를 알 수 없는 고객';

console.log(object);

// 논리 연산자로 변환

object.height = object.height || '키를 알 수 없음';
object.name = object.name || '키를 알 수 없음';

console.log(object);
