export const tmp = '';

// 예제1) 제네릭 함수 구현
function reverseArray<T>(array: T[]): T[] {
  // 배열 메서드: reverse()
  // >> [1, 2, 3].reverse() === [3, 2, 1]

  let reverse = array.reverse();

  return reverse;
}

let stringArr =  reverseArray(['1', '2', '3', '4', '5']);
console.log(stringArr);   //  [ '5', '4', '3', '2', '1' ]

let boolArr = reverseArray([true, false, false]);
console.log(boolArr);   //  [ false, false, true ]


// 예제2) 제네릭 인터페이스 정의
interface KeyValue<K,V> { // K: key의 타입, V: value의 타입
  key: K,
  value: V
}

let keyValue: KeyValue<string, number> = {
  key: '샤키리',
  value: 1234
}

let anotherKeyValue: KeyValue<boolean, number> = {
  key: false,
  value: 1234
}

