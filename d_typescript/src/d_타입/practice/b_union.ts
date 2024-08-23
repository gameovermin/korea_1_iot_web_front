// b_union.ts

// 타입을 정의해서 사용자의 데이터를 요청하는 로직 작성

// ! 1. 사용자의 데이터에 대한 응답 정의 (타입 별칭)

type Success = {
  name: string;
  email: string;
};

type Fail = {
  error: string;
};


type FetchResponse = Success | Fail;

// ! 2. 사용자의 데이터 요청에 대한 "응답을 처리" 하는 함수 정의

function handleResponse(response: FetchResponse) {
  // 성공 또는 실패의 데이터를 처리하는 함수

  // in 연산자
  // : '속성' in 객체명
  // >> 해당 속성이 객체 안에 있는지의 여부를 boolean 타입으로 반환

  if ('error' in response) {
    console.log(response.error);
  } else {
    console.log(`Name : ${response.name}, Email : ${response.email}`);
  }
}


// ! 3. 비동기 작업을 사용하여 JSONPlaceholder에서 '사용자 데이터'를 가져오는 함수 저의

async function fetchUserData(userId: number) {
  // https://jsonplaceholder.typicode.com/users
  // 사용자 10명의 데이터를 모두 가져옴

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users?=${userId}`);
    
    if(!res.ok) {
      throw new Error('Error');
    }

    const data = await res.json();

    if (data.id) {
      // 성공에 대한 이름과 이메일데이터만을 가지는 객체 생성
      const userData: FetchResponse = {
        name: data.name,
        email: data.email
      }
    } else {
      handleResponse({error: '사용자 데이터가 정확하지 않습니다'});
    }

  } catch (error) {
    // let errorType = error instanceof Error;
    // {
    //   error: 값 (삼항 연산자 계산)
    // }

    // A instanceof B
    // : A 데이터가 B 안에 포함되어 있는지의 여부를 확인 (상속되어 있는지 여부)
    handleResponse({error: error instanceof Error ? error.message : 'unKnown Error'});
  }
}

fetchUserData(1);
fetchUserData(2);
fetchUserData(222);