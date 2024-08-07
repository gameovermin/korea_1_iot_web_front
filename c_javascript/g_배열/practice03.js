// ! 함수 & 배열 종합 문제

// 문제 1: 최솟값 찾기
// 주어진 숫자 배열에서 최솟값을 찾는 함수를 작성

const findMin = (array) => {
  let min = array[0];
  // 배열명.키워드: 배열이 가지는 "속성" 데이터
  // 배열명.키워드() : 배열이 가지는 "동작" 기능 >> 기능(함수) 호출
  let length = array.length;
  for (let i = 1; i < length; i++) {
    if(min > array[i]) {
      min = array[i];
    }
  }
  return min;
}

console.log(findMin([10, 2, 88, 7, 61, 94]));




// 문제 2: 홀수 찾기
// 주어진 숫자 배열에서 홀수만 추출하여 새로운 배열로 반환하는 함수를 작성

const findOdds = (array) => {
  let odd = [];
  let length = array.length;
  for (let i = 0; i < length; i++) {  
    // if (array[i] % 2 === 1) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
  }
  return odd;
}

console.log(findOdds([11,2,33,84,974,9641,152,9,7,97,4]));