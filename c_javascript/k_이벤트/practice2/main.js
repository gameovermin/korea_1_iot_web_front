
document.addEventListener('DOMContentLoaded', () => {
  // HTML 요소 가져오기
  const inputField = document.getElementById('search');
  const list = document.getElementById('item-list');
  const items = document.querySelectorAll('li');
  const noResult = document.getElementById('no-result');

  inputField.addEventListener('input', () => {
    // input 요소의 입력값 가져오기
    let value = inputField.value.toLowerCase();

    // 보여지는 아이템의 수를 저장하는 변수
    let visibleItemsCount = 0;

    items.forEach(item => {
      // item.textContent
      // : HTML 요소 객체의 내용값

      // 데이터.includes(값)
      // : 데이터 안에 값의 포함 여부를 boolean으로 반환
      if(item.textContent.toLowerCase().includes(value)) {
        // display 속성에 '' 빈 문자열 전달 시
        // >> css t속성의 display와 동일 (보여짐)
        item.style.display = '';
        visibleItemsCount++;
      } else {
        item.style.display = 'none';  //  일치하지 않는 경우: 숨김
        
      }

    })
  }); 
  noResult.style.display = visibleItemsCount > 0 ? 'none' : 'block';

});