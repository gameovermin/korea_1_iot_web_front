// ! 자바스크립트 비동기 프로그래밍 - Promise(프로미스)

// # 1. Promise 정의
// : 비동기 작업의 완료 또는 실패를 나타내는 '객체'
// >> 콜백 지옥을 피하고 비동기 처리에 대한 가독성 향상
// >> 현재는 알 수 없지만, 나중에 결과를 나타낼 수 있는 값

// # 2. Promise 상태 (3가지)
//     1. 대기 (pending)
//         - 초기 상태, 비동기 연산이 완료되지 않음
//     2. 이행 (fullfilled)
//         - 비동기 연산이 성공(완료) >> 프로미스가 결과값을 반환한 상태
//     3. 거부(rejected)
//         - 비동기 연산이 실패 >> 프로미스가 에러를 반환한 상태

// # 3. Promise 생성 및 사용법 (기본 구조)
// - new Promise() 생성자를 사용하여 생성
// - 해당 생성자는 실행 함수를 인자로 전달받음
// - 실행 함수는 resolve와 reject의 두 가지 매개변수를 가짐

// ? resolve(value) : 프로미스를 이행 상태로 변경, 결과값 value 반환
// ? reject(error) : 프로미스를 거부 상태로 변경, error 반환

const myPromise = new Promise((resolve, reject) => {
  // 비동기로 수행될 작업을 작성
  const condition = true;
  if (condition) {
    // 성공에 대한 로직
    resolve('프로미스 성공');
  } else {
    // 성공에 대한 실패
    reject('프로미스 실패');
  }
});

// # 4. 프로미스 메서드 사용
//     - new Promise() 를 통해 생성된 프로미스 객체 내부의 메서드
//     1. .then()
//         - 프로미스 이행 시 호출: resolve를 받음
//         - 인자값 2개를 받을 시 → 첫번째 : 이행, 두번째 : 거부
//     2. .catch()
//         - 프로미스 거부 시 호출 : reject를 받음 (오류 관리)
//     3. .finally()
//         - 성공/실패 여부와 상관 없이 실행될 콜백 하뭇 등록

myPromise
  .then((result) => {
    console.log(result);
    return '다음 수행 시 필요한 데이터';
  })
  .then((nextResult) => {
    console.log(nextResult);
    return '세 번째 작업';
  })
  .then((thirdResult) => {
    console.log(thirdResult);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('무조건 실행');
  });


// ! 프로미스 예시 (프로미스 체이닝 & 에러 핸들링)

// 데이터 가져오기
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('데이터 가져오기 성공'), 3000);
  }); // 프로미스 객체 반환
}

// 데이터 처리하기 
function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} 사용하기`), 3000);
  });
}

// then, catch 필수
fetchData()
  .then(result => processData(result)) // 3초
  .then(processResult => console.log(processResult)) // 3초
  .catch(error => console.error(error));

console.log('메인 로직의 실행 (시간이 많이 걸리지 않는 작업)');