// main.js

// 1) add
// : Named Import
import { add } from "./mathModule.js";;
console.log(add(4, 5));

// 2) subtract
import subtract from "./mathModule.js";
console.log(subtract(6, 3));

// 3) multiply

import { multiply as mp } from "./mathModule.js";
console.log(mp(4, 5));

// 4) divide

import * as math from "./mathModule.js";
console.log(math.divide(10, 5));

// cf 프로그래밍에서 0으로 나누는 경우 보통0으로 나누는 경우 오류 발생
// 나누는 값이 0이 되지 ㅇ낳도록 조건문을 달아줌
console.log(math.divide(10, 0));
