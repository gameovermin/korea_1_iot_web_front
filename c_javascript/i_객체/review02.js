// ! 장바구니 상품 객체
// : 사용자가 선택한 상품들을 관리

// # 1. 장바구니 시스템 기능 정리
// 1) 추가: 장바구니에 상품을 추가
// >> 이미 존재하는 상품이면 수량을 업데이트

// 2) 조회: 현재 장바구니의 상품목록을 조회

// 3) 수정: 특정 상품의 수량을 변경

// 4) 삭제: 장바구니에서 특정 상품을 제거

// # 2. 장바구니 객체 정의

// 1) id - 상품의 고유 식별자 (number)
// : 상품을 구분하는 용도

// 2) name - 상품의 이름 (string)
// : 상품을 사용자에게 표시하기 위한 용도

// 3) price - 상품의 가격 (number)
// : 상품의 단위 가격 ($, 달러)

// 4) quantity - 사용자가 선택한 해당 상품의 수량 (number)
// : 

// ? 상품 객체 예시

let product = {
  id : 1,
  name : 'banana',
  price : 1.5,
  quantity : 2
}

// # 3. 장바구니 시스템 구현

// 상품을 저장할 배열 초기화 (장바구니)
let cart = [];

// ? 1.  장바구니에 상품을 추가
function addToCart(id, name, price, quantity) {
  // 장바구니 내에 해당 상품이 있는지 검색
  // (findIndex : 배열 내에 동일한 요소가 있는지 찾고 index를 반환 / 없으면 -1 반환)
  // const index = cart.findIndex((item) => {item.id === id})
  const index = cart.findIndex(item => item.id === id);

  // 상품이 이미 장바구니에 있을 경우
  if (index > -1) {
    cart[index].quantity += quantity; // 해당 상품의 수량을 업데이트
  } else {
    cart.push({id, name, price, quantity});  // 새 상품을 장바구니에 추가
  }
  displayCart();
}

// ? 2. 장바구니 내의 모든 상품을 조회하는 함수

function displayCart() {
  console.log('=== cart contents');
  cart.forEach((item) => {
    console.log(`${item.name} - Price : ${item.price} , Quantity : ${item.quantity}`);
    console.log(`TOtal : ${item.name} 's Price : ${item.price * item.quantity}`);
  });
}

// ? 3. 특정 상품의 수량을 변경하는 함수

function updateQuantity(id, quantity) {
  const index = cart.findIndex(item => item.id === id);

  if (index > -1 && quantity > 0) {
    cart[index].quantity += quantity; //
  } else {
    console.log('Invalid quantity OR item not found');
  }
  displayCart();
}

// ? 4. 특정 상품을 삭제하는 함수
function removeFromCart(id) {
  cart = cart.filter((item) => {item.id !== id});
  displayCart();
}

// ? 5. 장바구니의 총합을 계산하는 함수
// : reduce() 메서드
// 배열.reduce((acc, value, index, array) => {}, initialValue)

function calcuateTotal() {
  let total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  console.log(`TOtal : ${total}`);
}

function clearCart() {
  cart = [];
  console.log(`전체 상품 초기화`);
  displayCart();
}

// # 4. 장바구니 시스템 실행

addToCart(1, 'banana', 1.5, 3);
addToCart(2, 'orange', 0.9, 1);
addToCart(1, 'banana', 1.5, 1);
addToCart(2, 'orange', 0.9, 3);

updateQuantity(1, 5);


calcuateTotal();
