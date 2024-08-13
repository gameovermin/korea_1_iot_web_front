// JavaScript 모듈 구성 및 적용
// 내용	**문제 1**

// 다음과 같은 요구사항을 만족하는 JavaScript 모듈을 작성하고, 이를 다른 파일에서 불러와 사용하는 코드를 작성하세요.

// **요구사항:**

// 1. `mathOperations.js`라는 파일을 생성하여, 아래 기능을 제공하는 함수를 정의하세요.
// - `add(a, b)`: 두 수의 합을 반환하는 함수 (Named Export로 내보내기)
// - `subtract(a, b)`: 두 수의 차를 반환하는 함수 (Named Export로 내보내기)
// - `multiply(a, b)`: 두 수의 곱을 반환하는 함수 (Default Export로 내보내기)
// 2. `main.js`라는 파일을 생성하여, `mathOperations.js`에서 제공한 함수들을 불러와 사용하세요.
// - `add`와 `subtract` 함수는 원래 이름 그대로 사용하고, `multiply` 함수는 `multi`라는 이름으로 별칭을 사용하여 불러오세요.
// - 두 수를 입력받아 위의 세 가지 연산을 수행하고 결과를 출력하는 코드를 작성하세요.