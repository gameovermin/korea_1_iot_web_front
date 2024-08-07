// 자바스크립트의 내장 함수 - 콜백 함수 활용 (고차 함수)


// ! 타이머 함수
// : 특정한 시간이 지난 후 함수를 실행하거나 일정 간격으로 함수를 반복 실행하는 기능


// & 1. setTimeout(콜백함수, 시간);
// 지정된 시간이 지난 후, 주어진 콜백 함수를 단 한 번 실행
// - (지연) 시간 : 밀리초(ms, 1000ms === 1s)

// 기본 사용법

function greet(name='산체스') {
  console.log(`helo, ${name}`);

}

greet();
// 2초 뒤에 실행
// >> 콜백함수로 함수를 전달
// >> 콜백함수의 인자 전달은 세 번째 인자부터 나열되는 값이 함수의 매개변수로 전달

setTimeout(greet, 1000, '야말');  //  2초뒤 실행
setTimeout(greet, 2000, '파레호');  //  3초뒤 실행

// * 익명함수 사용
setTimeout(() => {
  console.log('4초뒤에 실행');
}, 4000);

// cf) 타이머 취소
// : clearTImeout으로 설정한 타이머를 제거

const timeId = setTimeout(greet, 2000, '페키르');

clearTimeout(timeId);


// & 2. setInterval(콜백함수, 시간);
// '지정된 시간 간격마다' 함수를 반복해서 실행
// : 사용법 setTImeout()과 유사


let cnt = 1;
const id = setInterval(() => {
  console.log(`3초마다 실행됨. ${cnt}번쨰`);
  cnt++;
}, 3000);

setTimeout(() => {
  console.log('타이머를 종료합니다');
  clearInterval(id);
}, 15000);

