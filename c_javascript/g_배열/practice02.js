// ! 1.배열 합계 구하는 함수

let array = [1, 2, 3, 4, 5];

function sumArray(array) {
  let sum = 0;  // 배열의 요소 합을 저장할 변수 선언 & 초기화

  let length = array.length;
  for (let i = 0; i < length; i++) {
    sum += array[i];  // sum = sum + array[i];
  }
  return sum;
}

console.log(sumArray(array)); //  15
console.log(sumArray([11, 22, 33, 44, 55]));  //  165


// ! 2. 특정 수 이상의 요소 필터링

function filterTen(array) {
  let filtered = [];  //  10 이상의 요소만 담을 새 배열 생성
  let length = array.length;

  for (let i = 0; i < length; i++) {
    if(array[i] > 10) {
      filtered.push(array[i]);
    }
  }
  return filtered;
}

console.log(filterTen([1,23,4,525,634,132,63,742,43]));
console.log(filterTen([13,56,9,1,9,4132,48,13,5,45,13,3]));

// ! 3. 배열 요소 검색

function containsElement(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false;
}

console.log(containsElement([1, 2, 3, 4, 5, 6], 3));  //  true
console.log(containsElement([1, 2, 3, 4, 5, 6], 8));  //  false

console.log('===========================');

// ! 4. 배열 평균 구하기

function findAverage(array) {
  let average = 0;
  let length = array.length;
  for (let i = 0; i < length; i++) {
    average += array[i];
  }
  
  return average / length;
}

console.log(findAverage([10, 20, 30, 40, 50]));

// ! 5. 최대값 찾기
// - 배열의 첫번째 요소를 max라는 변수에 담기
// - 배열을 순회하면서 max보다 큰 값이 있을 경우 max를 해당 값으로 재할당

function findMax(array) {
  let max = array[0];
  for (let i = 0; i < array.length; i++) {
    if(max < array[i]) {
      max = array[i];
    } 
  }
  return max;
}

console.log(findMax([10, 70, 30, 42, 50, 15]));
