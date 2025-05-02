//비교 연산자 -----

console.log(10>5); // true
console.log(10 == 5); // false
console.log(10 != 5); // true

// 동등연산자(==) 주의할 점! (일치연산자 활용법)--------

const aa = 1;
const bb = "1";

console.log(aa == bb); // true (숫자형과 문자형을 비교했는데 true 나옴.)

//type까지 비교하는 법!(일치연산자)
console.log(aa === bb); //false