// ! === 1. 이벤트 정의

// 

// ※ JS 이벤트의 종류

// 1. 마우스 이벤트



// 2. 키보드 이벤트

// 1. 폼 이벤트

// 1. 문서/윈도우 이벤트

// ! 3. 이벤트 핸들러 ‘등록’ 방법 === 
  // 예시 함수 정의 (이벤트 활용 시 사용 될 "랜덤 색상 생성 함수")
  // rgb(r, g, b); >> 0 ~ 255까지의 정수가 지정

  // * random 함수 정의 : 랜덤 숫자 생성

  function random(num) {
    // 1. Math.random()
    // : 0이상 1미만의 부동 소수점 난수(랜덤 실수(소수점))를 생성하고 반환

    // 2. Math.floor()
    // : 괄호 안의 수를 내림하여 가장 가까운 정수를 생성

    // ex) 0이상 101미만까지의 정수 생성

    return Math.floor(Math.random() * (num + 1));
  }
  // console.log(Math.random()); //  
  // console.log(Math.random() * 100);  //  0 <= x < 100
  // console.log(Math.random() * 101);  //  0 <= x < 101
  // console.log(random(100));

  // * randomColor 함수로 랜덤 색상 생성 
  function randomColorFunc() {
    // 'rgb(x, y, z)'형식과 동일

    return `rgb(${random(255)},${random(255)}, ${random(255)})`;
  }

  // ? 1. HTML 이벤트 핸들러 속성(프로퍼티)
    const btn1 = document.querySelector('#btn1');
    
    // & on- 키워드
    // : 이벤트 종류를 연결시켜주는 키워드
    // >> HTML 요소에 함수를 할당해서 이벤트를 연결

    btn1.onclick = function() {
      const randomColor = randomColorFunc();

      // document.body.style.backgroundColor = randomColor;
      btn1.style.backgroundColor = randomColor;
    }

      
  // ? 2. 인라인 이벤트 핸들러
  // 사용하지 않는 것을 권장
  // >> 코드를 파싱(분석)과 유지보수의 어려움

  const textButton = document.querySelector('#textChange');

  function textChangeFunc() {
    const randomColor = randomColorFunc();
    textButton.style.color = randomColor;
  }

  // & HTML 요소의 참조를 가지고 오는 방법

  //  cf) JS 내에서의 HTML 인식
  // : 자바스크립트의 객체로 인식 
  // >> DOM(Document Object Modal)으로 인식

  // document.querySelector('선택자');
  // : 같은 선택자가 여러개일 경우 첫번째 요소만 가져옴

  const btn2 = document.querySelector('.btn2');
  btn2.onclick = function () {
    console.log('버튼이 클릭되었습니다.');
  }

  // btn2.onclick = () => console.log('버튼이 클릭되었습니다');

  // document.querySelectorAll('선택자');
  // : 여러 개의 요소의 참졸ㄹ 모두 가져와서 한번에 이벤트 핸들러를 추가
  // >> 해당 참조값들이 배열(리스트)로 저장

  const divs = document.querySelectorAll('div');

  divs.forEach(div => div.onclick = function () {
    this.style.backgroundColor = randomColorFunc();
  });

  // ? 3. addEventListener 메서드
  // : 표준 이벤트 모델
  // HTML 요소에 addEventListener 메서드를 사요하여 이벤트를 등록하는 방법
  // >> 한 요소에 여러 개의 이벤트 핸들러 등록 가능

  const btnsButton = document.querySelectorAll('.btnsChange');

  btnsButton.forEach(btn => {
    btn.addEventListener('click', () => {
      const randomColor = randomColorFunc();
      btn.style.backgroundColor = randomColor;
    });
  });

  // ? 4. 이벤트 제거하는 방법 === 
  // : removeEventListener() 메서드 사용
  // >> 이벤트 핸들러를 제거하는 함수
  const removeBtn = document.querySelector('.remove');

  let removeChange = () => {
    const randomColor = randomColorFunc();

    removeBtn.style.backgroundColor = randomColor;
  }

  // cf) 함수 호출 vs 함수 등록
  // 함수호출 : 함수명()
  // >> 코드를 읽는 즉시 함수가 실행

  // 함수 등록 : 함수명
  // >> 부가적인 발생, 함수를 전달하여 실행

  // removeBtn.addEventListener('click', () => {
  //   const randomColor = randomColorFunc();

  //   removeBtn.style.backgroundColor = randomColor;
  // });

  // 이벤트 리스너 등록
  removeBtn.addEventListener('click', removeChange);

  // 이벤트 리스너 삭제
  removeBtn.removeEventListener('click', removeChange);