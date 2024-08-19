
localStorage.setItem('key', 'value');
localStorage.setItem('username', '킴팸베');
// cf ) username, userName

localStorage.setItem('userAge', 50);
localStorage.setItem('isStudent', false);

let userInfo = {
  name: '신진호',
  age: 33
};

localStorage.setItem('userInfo', JSON.stringify(userInfo));




// ? 로컬 스토리지 데이터 불러오기 (읽어오기)

let keyValue = localStorage.getItem('key');
let usernameValue = localStorage.getItem('username');
let userAgeValue = localStorage.getItem('userAge');

if (keyValue || userAgeValue || usernameValue) {

  console.log(keyValue);
  console.log(userAgeValue);
  console.log(usernameValue);
}

// 2) 참조 자료형(객체, 배열)

let storedData = localStorage.getItem('userInfo');
let userInfoValue = JSON.parse(storedData);
console.log(userInfoValue);
console.log(userInfoValue.name);

// # 로컬 스토리지에서 데이터를 가져오는 경우
// : null을 반환하는 상황을 대비하여 데이터 사용 전 null값 처리를 확인

// ? 로컬 스토리지 데이터 삭제

// : localStorage.removeItem(key);