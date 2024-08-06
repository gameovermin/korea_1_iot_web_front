// ! 기타 배열의 고급 메서드 (고차함수)

// # 1. reduce()
// 배열의 각 요소에 대해 함수를 적용하여 '단일 값을 생성'

// * 기본 형태(구조)

/*
  ? reduce 메서드의 인자값: 콜백함수, 초기값(initialValue) => (init 이라고 많이 씀)
  배열명.reduce((accumulator, currentValue, currentIndex, array) => {
    
  }, initialValue);

*/

// * reduce 콜백 함수의 인자값

// 1. accumulator : 이전 작업물의 반환값
// : 첫번째 호출에서는 initialValue값이 지정

// 2. currentValue : 현재 순회되는 요소

// 3. currentIndex : (선택)

// 4. array : (선택)

// +) initialValue : 초기값, 생략시 배열의 첫 번째 요소값

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((acc, val) => acc + val, 0);

// acc += value; 와 같음

console.log(sum);

// ? cf) 배열의 고차함수(콜백함수) 사용 시
// 중괄호 사용의 경우
// : 반드시 return문 사용

// 중괄호 미사용의 경우
// : 반드시 return 키워드를 생략

// # === reduce 예시 2 === //

let cars = ['audi', 'bmw', 'volvo', 'hyundai', 'kia'];

let combinedCar = cars.reduce((acc, val) => acc + ', ' + val);

console.log(combinedCar); //  audi, bmw, volvo, hyundai, kia
console.log(typeof(combinedCar)); //  string


// # 2. sort(): 배열의 요소를 정렬(오름차순)

let numbersArray = [5, 1, 2, 4, 9, 8, 3, 7, 13, 10, 6];

console.log(numbersArray.sort()); 
/*
  [1, 10, 13, 2, 3, 4, 5, 6, 7, 8, 9]
*/

// # 3. reverse(): 배열의 요소를 정렬(내림차순)

console.log(numbersArray.reverse());
/*
[
  9, 8, 7,  6,  5,
  4, 3, 2, 13, 10,
  1
]
*/

// # 4. 배열의 요소를 검색 & 평가

// 1) indexOf, lastIndexOf
// : 특정 요소의 인덱스를 찾는 메서드

// 2) find, findIndex
// : 조건을 만족하는 요소나 해당 인덱스를 찾는 메서드


let indexOf = numbersArray.find(num => num > 5);
let lastIndexOf = numbersArray.findIndex(num => num > 5);
let firstOverFive = numbersArray.find(num => num > 5);
let firstOverFiveIndex = numbersArray.findIndex(num => num > 5);

console.log(indexOf);
console.log(lastIndexOf);
console.log(firstOverFive);
console.log(firstOverFiveIndex);
