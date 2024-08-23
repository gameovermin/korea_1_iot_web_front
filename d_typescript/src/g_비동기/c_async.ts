// ! async & await
export const tmp = '';
// ? 1. async 함수 내에서만 await 사용이 가능
// ? 2. 동기 코드와 유사한 형태로 비동기 코드 작성


// 외부(jsonplaceholder)에서 데이터를 가져오는 함수
// : 시간이 오래걸리는 작업
async function fetchUserData() {
  // 외부와의 연결 시 발생할 오류를 방지
  // try - catch 블록 사용

  try {
    // 실행할 로직을 작성
    // : 해당 위치에서 오류 발생 시 catch 블록으로 이동

    // Promise 객체 : 연산 결과에 따라 성공 또는 실패의 상태를 가짐
    // +) fetch('url): 해당 url을 통해 서버에 데이터 요청을 보내고 그 응답을 프로미스 형태로 가져옴
    // >> 프로미스가 성공의 상태를 가질 경우
    // Response객체를 반환함 (요청에 대한 결과값)
    const res = await fetch('https://jsonplaceholder.typicode.com/users/3');

    if (!res.ok) {
      throw new Error('Fetch Fail');
    }

    // res.json();
    const data = await res.json();

    console.log(`가져온 데이터: ${data}`, data);
    // 객체와 배열은 템플릿 리터럴 `${}` 내부에서 출력 할 경우 데이터 그 자체가 출력되지 않음

  } catch (error) {
    console.log('에러임 ㅋㅋ');
  }
}

fetchUserData();
console.log('hello');

/*
  hello
  가져온 데이터: [object Object] {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
  ,
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications'
    }
  }
*/