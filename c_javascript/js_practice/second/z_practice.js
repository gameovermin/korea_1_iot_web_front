// 반복문 연습 예제

// 배열의 모든 요소를 출력
// 배열명 : frults
// 배열 요소의 개수 : 3개
// 배열의 길이 : 3개
// 배열의 마지막 요소의 인덱스 번호 : 2

let frults = ['apple', 'banana', 'orange'];

let frultsLength = frults.length; // 반복문 실행 시 조건식에 대한 배열의 길이 측정이 단 한번만으로 가능

console.log('== for문 ==');
for (let i = 0; i < frultsLength; i++) {
  
  console.log('배열 : ', frults[i]);
}


console.log('== while문 ==');
let j = 0;
while (j < frultsLength) {
  console.log('과일명 : ', frults[j]);
  j++;
}

console.log('== do-while문 ==');

let k = 0;
do {
  console.log('과일명 : ', frults[k]);
  k++;
} while (k < frultsLength);


// 반복문의 베스트 practice

