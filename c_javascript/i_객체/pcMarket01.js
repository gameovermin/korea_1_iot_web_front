let calender = {
  id : 1,
  content : '수업',
  completed : false
} 

let calenders = [];

function add(content)  {
  const newCal = {
    id: calenders.length + 1,
    content : content,
    completed : false
  }
  calenders.push(newCal);

  // add하고나서는 화면 재출력
  disView();
}

function del(id) {
  calenders = calenders.filter((cal) => {
    return cal.id !== id;
  });
  disView();
}

const toggleCal = (id) => {
  calenders = calenders.map((cal) => {
    if(cal.id === id) {
      return {...cal, completed: !cal.completed};
    }
    return cal;
  });
  disView();
}


function disView() {
  console.log('===========');
  calenders.forEach(cal => {
    console.log(`${cal.id} : ${cal.content} - ${cal.completed ? '완료' : '완료안됐음'}`);
  });
  console.log('===========');
}

add('오늘 마치고 이마트트레이더스 가기');
add('집 청소 및 분리수거하기');
add('랜선 산거 바꾸기');  
add('치약, 칫솔, 바디워시 주문하기');

toggleCal(2);
toggleCal(1);
toggleCal(3);

