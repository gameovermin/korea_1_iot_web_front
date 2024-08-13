const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  const p = document.querySelector('p');
  p.textContent = '버튼이 클릭되었습니다!';
  console.log('Button clicked!');
});