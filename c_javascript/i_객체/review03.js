// 
// ! 도서관 관리 시스템
// 도서관 (객체)
// 책 (객체)


// # 프로젝트 기능 정의

// 1) 도서관 (객체)
// 속성 : 여러 도서
// 기능 : 
// - 도서를 추가
// - 도서 목록을 출력
// - (특정) 도서를 대여
// - (특정) 도서를 반납


// 2) 도서 (객체)
// 속성 : 도서 고유의 id / 도서의 제목 / 도서의 저자 / 도서의 대여 가능 여부

// # 프로젝트 객체 예시
let exampleLibrary = {
  books : [], // 도서관의 책 목록을 저장하는 배열
  // 다양한 메서드 정의

};

let exampleBook = {
  id : 1,
  title : 'SQLD 정복하기',
  author : 'cys',
  isAvailable : true // 기본값
  // 다양한 메서드 정의
};


// # 프로젝트 구현
// ? Book 클래스 : 각 책의 정보 저장 & 대여 및 반납 기능 정의
class Book {
  // 생성자 함수(메서드)
  // : 클래스 호출 시 자동으로 실행되는 함수 >> 객체 생성시 속성값 초기화
  constructor(id, title, author) {
    // this 키워드 - 해당 클래스로 생성되어 사용 중인 현재의 객체
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }
  // 메서드 정의
  rent() {  //  도서 대여
    if (this.isAvailable) { //  도서가 대여 가능한 상태
      // 도서의 대여 상태를 false(대여됨) 으로 변경
      this.isAvailable = false;
      console.log(`${this.title} has been rented`);
    } else {
      console.log(`${this.title} is currently not available`);
    }
  }

  returnBook() {  //  도서 반납
    this.isAvailable = true;
    console.log(`${this.title} has been returned`);
  }

}

class Library {
  constructor() {
    this.books = [];  // 도서관의 도서 목록을 저장하는 배열
  }

  // cf) 클래스의 메서드 정의 시 함수의 형태 이지만 function 키워드 사용 X

  // 책의 추가
  // addBooks(book) {
  //   this.books.push(book);
  //   console.log(`${book.title} by ${book.author} has been added`);

  // }
  addBooks(title, author) {
    const newBooks = new Book(this.books.length + 1, title, author);
    this.books.push(newBooks);
    console.log(`${title}책이 도서관에 추가되었습니다. (저자 ${author})`);
  }

  // 책 목록 출력
  displayBooks() {
    console.log('===Library ===');
    this.books.forEach(book => {
      console.log(
        `
          ${book.id}: ${book.title},
          저자 ${book.author}
          ${book.isAvailable ? '대여 가능' : '대여안됨'}
        `
      );
    });
  }

  // 특정 id 책 대여
  rentBooks(id) {
    // cf) findIndex: 일치하는 요소의 인덱스 번호를 반환
    //     find: 일치하는 요소의 요솟값을 반환 >> 객체
    const book = this.books.find(book => book.id === id);

    // 책이 존재하면
    if(book) {
      book.rent();
    } else {
      console.log('해당 책을 찾을 수 없습니다.');
    }
  }

  // 특정 id 책 반납
  returnBooks(id) {
    const book = this.books.find(book => book.id === id);

    if(book) {
      book.returnBook();
    } else {
      console.log('해당책을 살 수 없음');
    }
  }

}



// ? Library 클래스 : Book 객체의 목록을 관리 (추가, 추렭, 대여 및 반납)




// # 프로젝트 실행
const busanLibrary = new Library();

busanLibrary.addBooks('sqld 공부', 'ㅇㅇ');
busanLibrary.addBooks('JS 공부', 'ㄱㄱ');
busanLibrary.addBooks('JAVA 공부', 'ㄴㄴ');
busanLibrary.addBooks('IOT 공부', 'ㄷㄷ');

busanLibrary.displayBooks();

busanLibrary.rentBooks(1);  //  대여
busanLibrary.displayBooks();
busanLibrary.rentBooks(1);  //  대여 불가 메시지

busanLibrary.returnBooks(1);
busanLibrary.displayBooks();

const seoulLibrary = new Library();

seoulLibrary.addBooks('커피마시기', '오팬다');
seoulLibrary.addBooks('드리블연습', '마두에케');

seoulLibrary.displayBooks();

seoulLibrary.rentBooks(5);

// cf) 인스턴스(instance) === '객체'
// : 클래스를 통해 생성된 객체
// >> 메모리 주소에 할당된 객체
// >> 각 인스턴스는 독립된 객체

