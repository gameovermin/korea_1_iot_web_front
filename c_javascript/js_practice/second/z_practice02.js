// 구구단 출력기
// 사용자로부터 1 ~ 9 사이의 숫자를 입력받기 (prompt)

// const num = Number(prompt('출력할 구구단의 숫자를 입력하세요 (1부터 9까지의 숫자'));

// if (!(num < 10 && num > 0)) {
//   console.log("해당 범위내의 숫자가 아닙니다.");
// } else {
//   for (let i = 1; i < 10; i++) {
//     // console.log(num + ' X ' + i + ' = ' + num * i);
//     console.log(`${num} X ${i} = ${num * i}`);
//   }
// }


// while문 조건식 내에 true에 대한 boolean값 사용시 : 무한 루프

while (true) {
  const input = prompt('출력할 구구단의 숫자를 입력하세요 (1부터 9까지의 숫자) // "exit를 입력하시면 종료됩니다'); 

  // const num = Number(prompt('출력할 구구단의 숫자를 입력하세요 (1부터 9까지의 숫자'));
  
  if (input.toLowerCase() === "exit") {
    console.log('프로그램을 종료합니다');

    // while 문의 무한 루프의 경우 break; 키워드를 만나면 종료
    break;
  }

  const num = Number(input);

  if (!(num < 10 && num > 0)) {
    console.log("해당 범위내의 숫자가 아닙니다.");
  } else {
    for (let i = 1; i < 10; i++) {
      console.log(`${num}단`);
      // console.log(num + ' X ' + i + ' = ' + num * i);
      console.log(`${num} X ${i} = ${num * i}`);
    }
  }
}