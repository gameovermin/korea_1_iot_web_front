// ! 문서 객체 가져오기

// ? head, body, title
// document.head
// document.body
// document.title

// ? body 요소 내부에서 만든 다른 요소들
// queryselector() querySelectorAll()
// getElementById()

// ! DOM 수정하기

// # 1. 글자 조작하기
// 문서 객체.textContent
// : 입력된 문자열을 그대로 넣기

// 문서객체.innerHTML
// : 입력된 문자열을 HTML형식으로 넣기

document.addEventListener('DOMContentLoaded', () => {
  const a = document.getElementById('textContent');
  const b = document.getElementById('innerHTML');
  const c = document.getElementById('innerText');

  a.textContent = '<h2>textContent 속성</h2>';
  // : 텍스트 그 자체가 내용으로 삽입

  b.innerHTML = '<h2>innerHTML 속성</h2>';
  // : HTML 문서구조를 인식하고 해석한 뒤 내용만 삽입

  // + ) JS에서 글자를 조작 시 문서 구조는...

  c.innerText = '<h2>innerHTML 속성</h2>';

});

// # 2. 속성 조작하기
// : 문서 객체의 속성(attribute)을조작

// ? 문서객체.setAttribute(속성이름, 값)
// : 특정 속성에 값을 지장

// ? 문서객체.getAttribute(속성이름)
// : 특정 속성을 추출

// cf) HTML 표준에 정의된 속성은 위의 메서드 사용 없이 사용 가능
// >> 내장된 속성들은 .연산자(온점)을 사용하여 속성 읽기 또는 지정이 가능

document.addEventListener('DOMContentLoaded', () => {
  const seas = document.querySelectorAll('.sea');

  seas.forEach((item, index)=> {
    // 100, 200, 300, 400
    const width = (index + 1) * 100;
    
    // item.setAttribute('width', width);
    // item.setAttribute('height', '250px');
    item.style.width = width + 'px';
    item.style.height = '250px';
    
    const source = '../../a_html/images/sea1.jpg';
    const alter = '강아지 이미지';

    item.src = source;
    item.alt = alter;

  });


});


// # 3. 스타일 조작하기
// : 문서 객체의 스타일 조작 시 style 속성을 사용

// ? style 속성은 JS에서 객체로 인식
// : JS 문법 체계에서는 식별자에 _(하이픈) 기호 사용 X
// >> lowerCameCase 사용을 권장
// text-align >> textAlign
// font-size >> fontSize

// ? style 객체 사용법
// : 주로 점(.) 표기법을 사용

// h1.style.backgroundColor
// h1.style['backgroundColor']
// h1.style['background-color']

document.addEventListener('DOMContentLoaded', () => {

  // id 값이 container인 요소 내부의 div를 가져옴
  const divs = document.querySelectorAll('#container div');

  divs.forEach((item, index) => {
    const gradation = index * 10; //  0 ~ 240

    item.style.height = '10px';
    item.style['backgroundColor'] = `rgba(${gradation}), ${gradation}, ${gradation})`;

  });

});

