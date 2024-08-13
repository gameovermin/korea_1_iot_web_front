const userInput = "Hello World";

// >> 문제 2

// 다음과 같은 문자열 처리 기능을 구현하기 위해 JavaScript 내장 함수를 사용하여 코드를 작성하세요.

// >> 요구사항

// 1. 사용자가 입력한 문자열에서 모든 공백을 제거한 후, 해당 문자열을 역순으로 변환하는 함수를 작성하세요.
// 2. 결과 문자열이 대문자로 변환된 후 출력되도록 하세요.

// const userInput = prompt('문자열을 입력하세요');

function example() {
  
  let userInputText = userInput.trim().replaceAll(' ', '');
  // 공백 전부 없애줌 replaceAll 함수로
  
  console.log(userInputText);
  let arr = userInputText.split('');
  // 배열로 변환
  
  console.log(arr);
  let arr2 = arr.reverse();
  // 배열을 역순으로 저장
  
  console.log(arr2);
  let text = arr2.join('').toLocaleUpperCase();
  // 배열을 문자열로 다시 바꾸고 대문자로 전환
  
  console.log(text);
}

