// "username"이라는 쿠키에 "LSA"라는 값을 저장
// - 경로의 경우 해당 웹 페이지에서 쿠키값에 접근할 수 있는 경로를 지정
// >> '/' 빈 슬래시 사용 : 어떤경로에서든지 쿠키값에 접근 가능
document.cookie = "username=las; path=/;";

// - 만료 날짜 : expires 속성을 설정
// >> 만료 날짜를 설정하지 않는 경우 세션 쿠키로 자동 설정되어 브라우저가 닫힐 때 자동 삭제
// >> 만료 날짜는 UTC(협정 세계시) 시간 다누이를 가짐
// : KST(한국 표준시) 시간단위보다 9시간 느림 (한국이 UTC보다 9시간 빠름)

let date = new Date();  // 현재 날짜, 시간을 저장
// >> Date 객체에 .getTime() 속성 : 시간 데이터를 가져오기
// >> Date 객체에 .setTime() 속성 : 시간 데이터를 설정

date.setTime(date.getTime() + (1  * 60 * 60 * 1000)); // 현재 시간에 한시간을 추가

let expires = "expires=" + date.toUTCString();  // 시간을 협정세계시 문자열로 변환

document.cookie = "userAge=50;" + expires + "; path=/;";
// userAge=50l expires=시간문자열; path=/;


let date2 = new Date();
date2.setTime(date2.getTime() + (24  * 60 * 60 * 1000)); // 현재 시간에 한시간을 추가

let expires2 = "expires=" + date2.toUTCString();


document.cookie = "oneDay=하루; " + expires2 + "; path=/";