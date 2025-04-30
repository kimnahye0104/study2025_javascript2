//1. 경고창 띄우는 함수
// 변수 선언할 때는 변하지 않는 값 = const, 변할 수 있는 값은 let으로 선언하기.
// const는 대문자로 작성하는 것이 좋음.

//2. 자료형
const name = "Mike"; //문자형 String
const age = 30; // 숫자형 Number

//----------------------------------------
//문자형(String)은 3가지 방식으로 작성 `큰따옴표,작은따옴표,베틱기호`
const name1 = "Mike"
const name2 = 'Mike'
const name3 = `Mike`

const message = "I'm a boy.";
const message2 = 'I\'m a boy.';

const message3 = `My name is ${name}`;
console.log(message3)

const message4 = `나는 ${30+1}살 입니다.`;
console.log(message4)

//----------------------------------------
//숫자형
const PI = 3.14;

console.log(1 + 2); //더하기
console.log(10 - 3); // 빼기
console.log(3 * 2); // * 곱하기
console.log(6 / 3); // / 나누기
console.log(6 % 4); // % 나머지

const x = 1/0;
console.log(x) // = infinity

const y = name/2;
console.log(y) // = NaN (Not a Number) = 숫자가 아니다

//----------------------------------------
//Boolean
const a = true; // 참
const b = false; // 거짓

//이름이 마이크인가?
console.log(name == 'Mike')
//나이가 40보다 큰지..
console.log(age > 40)


//----------------------------------------
//null(존재하지 않는 값) 과 undefined(값이 할당되지 않음)
let age2;
console.log(age2)

let user = null; // user는 존재하지 않음.

//----------------------------------------
// typeof 연산자

console.log(typeof 3); // number
console.log(typeof name); // string
console.log(typeof true); // boolean
console.log(typeof "xxx"); // string
console.log(typeof null); // object (null은 객체형이 아님.)
console.log(typeof undefined); // undefined

//문자형+문자형, 문자형+숫자형
const c = "나는 ";
const d = " 입니다.";

console.log(c + name + d); //"나는 Mike 입니다."

console.log(c + age + "살"); //"나는 30살"