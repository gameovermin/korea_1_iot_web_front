// ! 콜백함수를 활용하는 자바스크립트의 '내장 함수'

// '배열'이 가지는 콜백 함수의 활용
// >> 메서드의 형태

// 배열.속성
// 배열.기능동작() >> 매서드 : 어딘가에 소속된 함수

// * 배열의 콜백 함수의 형태
// 배열.메서드(콜백함수)
// >> 콜백함수를 가지는 배열의 메서드의 공통된 기능은 배열을 "순회"
// >> 콜백함수는 3가지 함수 선언 방식 모두 사용 가능


// * 배열 콜백 함수의 '인자값'

function callback(value, index, array) {
  // 1. value
  // : 배열에서 순회되는 각 요소의 값
  
  // 2. index
  // : 배열에서 순회되는 각 요소의 인덱스 번호

  // 3. array
  // : 배열 그 자체

  // >> 콜백 함수의 인자값은 필수사항 X (value만 사용하는 경우가 많음)
  // : 사용하지 않는 인자값은 생략 가능

}

// function (value) {}
// function (value, index) {}
// function (, index) {}
// function (, , array) {}

// : 매개변수는 함수 내부의 로컬 변수이기 때문에 이름 변경 가능

// # 배열의 콜백함수를 가지는 메서드 종류

// & 1. forEach()
// : 각 요소에 대해 동일한 함수를 실행
// : 배열 내부의 요소를 매개변수로 사용하여 콜백함수를 호출

console.log('=== forEach() ===');

const numbers = [23, 41, 25, 50, 69];

// 배열명.메서드(각 요소들에게 적용할 함수 - 콜백 함수);

// numbers.forEach(function (value, index, array) {
numbers.forEach(function (value, index) { // array를 안쓰고있으므로 생략 가능

  // 모든 요소들에 동일한 기능 적용
  // : 단순한 기능 적용에 불과
  console.log(`${index + 1}번째 요소: ${value}`);
  /*
  1번째 요소: 23
  2번째 요소: 41
  3번째 요소: 25
  4번째 요소: 50
  5번째 요소: 69
  */
});

// numbers.forEach(value => console.log(`${index + 1}번째 요소: ${value}`));

console.log('========= map() ==========');

// & 2. map()
// : 배열의 각 요소에 대해 함수를 적용하고 '새로운 배열을 생성하여 반환'
// : 콜백 함수에서 리턴한 값들을 기반으로 새로운 배열을 만들어 줌
// >> 전체 배열의 요소 개수의 변화가 없음

const squaredNumbers = numbers.map(function (value) {
  return value * value;
});
// 배열의 메서드로 반환되는 값은 자동으로 배열 내에 저장

console.log(squaredNumbers);  // [ 529, 1681, 625, 2500, 4761 ]

// 화살표 함수로 변경
const newNumbers = numbers.map(value => value * value);

console.log(newNumbers);  // [ 529, 1681, 625, 2500, 4761 ]


console.log('============ filter =========== ');

// & 3. filter()
// : 콜백 함수에서 리턴하는 값이 true인 것들만 모아서 '새로운 배열을 만드는 함수'
// >> 기존의 배열과 요소의 수가 일치하지 않을 수도 있다

const basicArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const newArray1 = basicArray.filter(function (value) {
  return value % value === 0;
});

// 화살표 함수로 변경
const newArray2 = basicArray.filter(value => value % 2 === 0);

console.log(`원래 배열 : ${basicArray}`);
console.log(`짝수만 추출한 배열 : ${newArray2}`);


// # === 배열을 활용한 콜백 함수 예제 === //

let cars = ['audi', 'bmw', 'volvo', 'hyundai'];

cars.forEach(car => console.log(`cars : ${car}`));

const upperCaseCars = cars.map(car => car.toUpperCase()); //  [ 'AUDI', 'BMW', 'VOLVO', 'HYUNDAI' ]

console.log(upperCaseCars);

const lengthArray = cars.filter(car => {
  return car.length > 4;
})

const lengthArray2 = cars.filter(car => car.length > 4);

console.log(lengthArray); //  [ 'volvo', 'hyundai' ]
console.log(lengthArray2);  //  [ 'volvo', 'hyundai' ]


// & 메서드 체이닝
// : 메서드를 연속적으로 호출하는 프로그래밍 패턴
// >> 어떤 메서드(기능)이 반환(리턴)하는 값을 기반으로 또 다른 메서드(기능)을 줄줄이 사용하는 것

let numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// numbersArray의 값들 중
// - 짝수만 선택 (filter)
// - 해당 값들을 제곱 (map)
// - 콘솔에 출력(forEach)

numbersArray
  .filter(val => val % 2 === 0)
  .map(val => val * val)
  .forEach(val => console.log(val));

  // 이런형식으로 메서드 시작부분을 끊어주면 가독성이 좋아짐
