// ! 배열 메서드 + 콜백 함수

// 1. scores 배열을 생성
// 1. scores 배열을 생성
// 2. 무작위의 2자릿수 데이터를 8개 이상 채우기
// 3. passingScores 함수
// - 60점 이상인 점수의 개수를 passingCount 변수에 저장
// - 60점 이상인 점수의 평균을 passingAverage 변수에 저장
// >> 두 개의 데이터를 반환 (return a, b)


let scores = [12, 21, 34, 56, 94, 45, 61, 71, 49, 28];

const passingScores = (val) => {
  const passing = val.filter(score => score >= 60);

  const passingCount = passing.length;

  const passingAverage = passing.reduce((acc, score) => acc + score, 0) / passingCount;

  return [passingCount, passingAverage];
}

// 4. 함수 호출 (콘솔에 출력)

// ? cf) 구조분해 할당
// : 배열이나 객체의 데이터를 각각의 변수에 맞춰 할당
const [passingCount, passingAverage] = passingScores(scores);

console.log(`평균 60점 이상의 개수 : ${passingCount}`);
console.log(`평균 60점 이상의 평균 : ${passingAverage}`);


//# 2번 문제
const numbers = [1, 2, 3, 4, 5];
// 1) map 사용
// : 주어진 숫자 배열의 각 요소에 10을 더한 새로운 배열을 생성

// 2) filter 사용
// : 주어진 숫자 배열에서 홀수만 추출하여 새로운 배열을 생성

// 3) map과 filter 함께 사용
// : 주어진 숫자 배열에서 짝수만 찾아 각 숫자에 5를 곱한 새로운 배열을 생성

const addedTen = numbers.map(num => num + 10);

const filters = numbers.filter(num => num % 2 === 0);

const mapFilters = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 5);

console.log(addedTen);
console.log(filters);
console.log(mapFilters);