let numbers = ['10', '20', '30', '40', '50'];
let sum = 0;

function calculateSum() {

  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i]);
  }
  return alert(sum);
}

// 함수 실행
calculateSum();