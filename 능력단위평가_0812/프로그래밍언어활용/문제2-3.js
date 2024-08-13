// 응시자는 자신이 생각한 주제를 바탕으로 클래스를 설계하고 구현하세요. 이 클래스는 해당 주제와 관련된 속성과 메소드를 포함해야 하며, 객체를 생성하여 클래스의 기능을 테스트할 수 있어야 합니다.

/*
### 요구사항
1. **주제 선정**
    - 응시자는 자유롭게 주제를 선정할 수 있습니다. 예를 들어, 도서 관리, 차량 관리, 학생 관리, 쇼핑카트 등 다양한 주제를 선택할 수 있습니다.
2. **클래스 설계 및 구현**
    - 주제에 맞는 클래스를 설계합니다.
    - 클래스는 최소 3개 이상의 속성을 포함해야 합니다.
    - 클래스는 최소 2개 이상의 메소드를 포함해야 합니다.
    - 클래스의 속성과 메소드는 주제와 관련된 실제적인 기능을 수행해야 합니다.
    - 생성된 클래스를 이용해 최소 1개의 객체를 생성하고, 해당 객체를 이용해 메소드를 실행하는 코드를 작성합니다.
3. **객체 생성 및 메소드 테스트**
    - 설계한 클래스를 사용하여 객체를 생성합니다.
    - 생성된 객체를 통해 클래스의 메소드를 호출하여 동작을 확인합니다.
    - 객체의 상태를 나타내는 속성을 변경하거나 확인하는 코드도 포함합니다.
*/

class Part {
  constructor(id, name, made) {
    this.id = id;
    this.name = name;
    this.made = made;
    this.salesYn = true;
  }
  
  buy() {
    if(this.salesYn) {
      this.salesYn = false;
      console.log(`${this.name}을 구매하였습니다.`);
    } else {
      console.log(`${this.name}을 구매하지 못하였습니다.`);
    }
  }

  return() {
    this.salesYn = false;
    console.log(`${this.name} 이 반품처리되었습니다.`);
  }

}

class PcMarket {
  constructor() {
    this.parts = [];
  }
  
  order(name, made) {
    const newPart = new Part(this.parts.length + 1, name, made);

    this.parts.push(newPart);
    console.log(`${name} 부품을 구매했습니다. 제조사 : ${made}`);
  }

  partList() {
    console.log('부품목록');
    this.parts.forEach(part => {
      console.log(`${part.id}: ${part.name} 제조사: ${part.made} ${part.salesYn ? '판매중' : '품절'}`);
    });
  }
  
  salesPart(id) {
    const part = this.parts.find(part => part.id === id);
    if(part) {
      part.buy();
    } else {
      console.log('해당 부품을 찾을 수 없습니다');
    }
  }
  
  returnPart(id) {
    const part = this.parts.find(part => part.id === id);
    if(part) {
      part.return();
    } else {
      console.log('해당 부품을 찾을 수 없습니다');
    }
  }
}


const hiMart = new PcMarket();
const part = new Part();

hiMart.order('i7-14700KF', 'intel');
hiMart.order('Ryzen-7800X3D', 'amd');
hiMart.order('i5-14600KF', 'intel');
hiMart.order('Ryzen-7950X', 'amd');

hiMart.partList();

hiMart.salesPart(3);
hiMart.salesPart(2);
hiMart.salesPart(0);

hiMart.returnPart(2);
hiMart.returnPart(1);