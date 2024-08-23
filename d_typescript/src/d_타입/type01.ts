// type01.ts
export const tmp = '';

// ! 타입스크립트의 타입
// : 타입 명시(작성)가 필수 사항 X
// >> 프로그램의 안전성과 가독성을 높이는 역할

// ? 타입 명시 방법
// 타입 어노테이션 (type annotation - 타입 주석)
// 변수명 뒤에 콜론을 사용하여 JS 코드에 타입을 정의

// ? 타입의 종류
// # 1. 기본 타입 (원시 타입 -string, number, boolean 등)

let name: string = '틸레망스';
// 권장사항) 변수명: 타입명 = 값
let age: number = 29;
let iStudent: boolean = false;

let anyData = '문자열'; // 타입 명시 생략 가능 >> 타입 체킹을 생략 X

// name = 123; // Error (타입 체킹)
// anyData = 123; - 타입을 명시하지 않아도 초기 할당하는 데이터로 타입 지정

// # 2. 배열(list, array) 타입
// : 순서가 있는 요소의 모음을 나타내는 자료 구조

// - 변수명 뒤에 콜론 사용
// : 기본 타입명 뒤에 배열을 나타내는 []를 첨부
let list1: string[] = ['1', '2', '3'];
let list3: number[] = [1, 2, 3, 4, 5, 6];

// - 제네릭 타입
// : Array<기본타입>
let list2: Array<number> = [4, 5, 6];
let list4: Array<string> = ['str1', 'str2', 'str3'];

// # 3. void 타입
// : 아무런 값이 없다
// >> 주로 함수에서 반환값이 없거나 return 키워드가 있더라도 반환하는 값이 없을 떄 사용되는 타입
function voidType(parameter: number): void {
  // 함수의 타입 정의
  // >> 파라미터(매개변수)와 반환값(return값) 정의 가능
  // >> TS에서 "파라미터"에 타입을 명시하지 않으면 오류 발생
  //    : 함수 내에서 사용할 변수에 대한 안전성을 요구
  //    : 변ㅅ누의 타입 명시와 동일

  // >> 반환값의 타입 명시는 파라미터를 정의하는 () 소괄호 뒤에 콜론을 붙여 정의
  console.log(parameter);
  return;
}

voidType(10);

function stringReturn(str1: string, str2: string): string {
  return '안녕하세요';
}

// console.log(stringReturn()); // 안녕하세요
console.log(stringReturn('1', '2')); // '1', '2'


// # 4. null & undefined 타입

// null 타입
// : 아무것도 없음, 데이터가 잘못된 경우

// undefined 타입
// : 변수 생성은 했지만 안에 값이 없을 경우

// ? JS / TS 에서의 차이점
// JS : 각각의 타입에 다른 타입의 값 할당이 가능

// TS : 각각의 타입으로 지정된 변수에는 각 타입만 할당 가능

let nullType: null;
// nullType = 3;
// nullType = '인녕하세요';

let undefinedType: undefined;
// undefinedType = 5;
// undefinedType = '반갑습니다';

// # 5. any 타입 (모든)
// : 모든 타이벵 대해 허용하는 타입
// >> 타입 검사 오류가 발생하는 것을 방지 (모든 타입과 호환 가능)
// >> TS를 JS 처럼 사용할떄

// >> 사전에 오류 타입을 계산할 수 없음 (에러방지 X -> 사용 권장 X)

let anyType: any = 3;
anyType = '문자열';
anyType = false;
anyType = [];
anyType = {};

let unknownData; // let unknownData: any
// >> 타입을 직접적으로 명시하지 않을 경우 값이 할당되기 전까지 자동으롬 any 타입으로 인식

// # 6. never 타입
// : 절대 발생하지 않는 값의 타입
// >> 함수가 예외를 발생시키거나 끝나지 않을 때 사용

function error(message: string): never {
  throw new Error(message);
}

// error('에러발생!!!!');  - Error

let username: string = '자이르지뉴';
let userAge: number = 32;
let isSubscribed: boolean = false;


let fruits: string[] = ['포도', '사과', '배'];
let numbers: Array<number> = [1, 2, 3, 4, 5];

function voidFunc(str: string, num: number): void {
  console.log(str);
  console.log(num);
  return;
}

voidFunc('str', 15);