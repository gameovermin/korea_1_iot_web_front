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

hiMart.order('i7-14700KF', 'intel');
hiMart.order('Ryzen-7800X3D', 'amd');
hiMart.order('i5-14600KF', 'intel');
hiMart.order('Ryzen-7950X', 'amd');

hiMart.partList();