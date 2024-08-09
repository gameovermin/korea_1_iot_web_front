// 

/*
  1) thumb-bar의 이미지 클릭
  >> 해당 이미지로 full-img 변경

  2) button 태그에 클릭 이벤트 발생 시

  -Darken 버튼 클릭 시
  : 버튼의 class 속성을 dark로 지정
  : 버튼의 textContent을 'Lighten' 로 변경
  : overla 배경색을 rgba(0, 0, 0, 0.5 )로 변경

  - Lighten 버튼 클릭 시

  :

*/

// & 1) HTML 요소 선택

const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const displayedImage = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');

thumbBar.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG') {
    const imgSrc = e.target.src;
    displayedImage.src = imgSrc;
  }
});

btn.addEventListener('click', () => {

  // contains() 메서드
  // : 배열이나 문자열 내부에 값의 포함여부를 확인
  if (btn.classList.contains('dark')) {
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    btn.classList.remove('dark');
  } else {
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    btn.classList.add('dark');
  }
});