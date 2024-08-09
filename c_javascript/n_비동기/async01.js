// async01.js
// - 아닐 비, 같은 동, 시기 기 → 시간이 같지 않음
// - 특정 코드의 실행 완료를 기다리지 않고 다음 코드를 실행하는 프로그래밍 방식

// >> 프로그램의 실행 흐름을 차단하지 않고, '시간이 오래 소요' 되는 작업 처리에 사용

// ? 비동기 프로그래밍 예시

// * == 동기 프로그래밍

function work() {
  const start = Date.now();
  // 현재 날짜, 시간 숫자형태로 반환

  
  for (let i = 0; i < 9999999999; i++) {}
  const end = Date.now();
  console.log(end - start + 'ms');
}

// work(); // 5409ms

console.log('동기 작업 완료 후 실행될 코드 블럭');

// work 함수 호출 시 for문 작업 중 다른 작업을 동시 처리 X
// : for문 완료될 때 까지 end 변수 작업 X


// * == 비동기 프로그래밍

console.log('비동기 구현');

function anotherWork() {
  // 콜백 함수 : 다른함수의 인자로 전달되는 함수
  // cf) setTimeout(콜백함수, 지연시간ms);
  // 지연시간 뒤에 콜백함수가 호출
  setTimeout(() => {  
    const start = Date.now();
    // 현재 날짜, 시간 숫자형태로 반환
  
    
    for (let i = 0; i < 9999999999; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 0);

}

console.log('비동기 작업 시작');
anotherWork();
console.log('비동기 작업 완료 후 실행');  // 비동기 작업 완료 전 실행

// setTimeout()이 대표적인 비동기처리 프로그램 문법
// : 백그라운드에서 작업이 수행
// >> 기존의 코드 흐름을 막지 못함

// & another 함수 작업 완료 후 수행할 코드 설정
// >> 콜백 함수를 인자로 전딜 : 콜백 함수

function callbackWork(callback) {
  setTimeout(() => {  
    const start = Date.now();
    // 현재 날짜, 시간 숫자형태로 반환
  
    
    for (let i = 0; i < 1999999999; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 0);
  callback();
}

function afterWork() {
  console.log('작업이 완료되었습니다');
}

console.log('1. 작업을 시작합니다.');
callbackWork(afterWork);

console.log('2. 시간이 오래걸리는 작업을 기다리지 않습니다');