// ### 학습 목표:

// - 작성된 애플리케이션의 오류를 식별하고 수정할 수 있다.

// > 다음 코드는 일부 오류가 포함된 애플리케이션 코드입니다. 코드에는 변수 명명 규칙, 조건문, 반복문과 관련된 문제가 있습니다. 코드를 분석하고, 오류를 찾아 수정하세요

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    console.log(this.items);
    for (let i = 0; i < this.items.length; i++) { 
      console.log(`items ${this.items[i]['price']}`);
      total += this.items[i].price;
    }
    return total;
  }

  printReceipt() {
    console.log("items", this.items);
    console.log('length체크: ', this.items.length);

    if(this.items.length === 0) {
      console.log("Your cart is empty.");
    } else {
      console.log("Receipt:");
      this.items.forEach(function(item) {
        console.log(`${item.name}: $${item.price}`);
      });
      console.log(`Total: $${this.calculateTotal()}`);
    }
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 1.5 });
cart.addItem({ name: "Banana", price: 2.0 });

cart.printReceipt();


// ITems 명명규칙 수정 = items
// if (this.Items.length = 0) { 조건문  비교할떄 = 말고 === 로 비교
// for (let i = 0; i < this.items.length; i++) {  에서 <= 를 < 로 변경하여 length보다 작게

