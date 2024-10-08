// - 문서 객체 모델, Document Object Model
// - 문서객체 : HTML 안에서 요소(Element)로 불리는 객체를 JS에서는 문서 객체라고 불림
// 1. DOM 정의
//     - 웹 페이지를 문서 객체로 조작하고 관리할 수 있는 인터페이스(상호작용, 규약)
// 2. DOM 사용 방법
//     - JS에서 DOM에 접근하는 경우 요소를 선택, 추가, 수정, 삭제하는 메서드와 속성에 접근 O
//         - CRUD
// 3. DOM 조작 방법
//     - JS 내에서문서객체를 조작할 때 사용
//     - HTML의 모든 문서 구조(내용)가 모드 로드된 이후에 이벤트 발생

// ? 1) DOMContentLoaded 이벤트
// : JS 내에서 문서 객체를 조작할 때 사용
// 문서 객체가 정립된 이후에 콜백 함수(화살표 함수)가 실행


// ? 문서 객체 가져오기
// : 전체 HTML 구조를 객체로 인식하여 속성을 가져옴

// document.body
// -> document.head / document.title 처럼 읽어오기 가능

// * 2-2. querySelector() & querySelectorAll() 메서드
// : head 요소와 body 요소 내부에 생성한 다른 요소들을 읽어올 떄 사용

// >> 선택자 부분에는 css 선택자를 입력
// ex) 태그, #아이디, .클래스, 선택자 A 수혼B (자식 요소 선택자)

document.addEventListener('DOMContentLoaded', () => {
  // 해당 위치에 DOM 조작 코드를 작성

  // querySelector
  // : 요소를 하나만 추출(여러 개일 경우 제일 상단의 요소만 가져오기)

  const header = document.querySelector('h1');

  // 텍스트와 스타일을 변경
  header.textContent = 'HEADER ONE';
  header.style.backgroundColor = 'black';
  header.style.color = 'white';
  header.style.padding = '10px';

});

document.addEventListener('DOMContentLoaded', () => {
  // querySelectorAll()
  // : 문서 객체를 여러 개 추출하여 배열로 읽음

  const items = document.querySelectorAll('li');

  items.forEach(item => {
    item.textContent = 'LIST ITEM';
    item.style.color = 'pink';
    item.style.backgroundColor = 'black';
    item.style.listStyle = 'none';
    item.style.padding = '10px';
  });
});

// * 2-3 getElementById('아이디명');
// : 주어진 ID를 가진 요소를 찾아 해당 요소를 반환
// >> ID의 경우 문서 내에서 유일!
// >> #기호없이 아이디명만 문자열로 전달

document.addEventListener('DOMContentLoaded', () => {
  const example = document.getElementById('example');

  example.style.color = 'blue';
  example.style.backgroundColor = 'yellow';
  example.classList.add('special');
});