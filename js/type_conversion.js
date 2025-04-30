//형변환 하기 (Type Conversion)

// const mathScore = prompt("수학 몇점?");
// const engScore = prompt("영어 몇점?");
// ^^(계산실패)= 4540 ==> (계산실패이유) : prompt로 사용자에게 직접 입력받은 값은 '문자형'이기 때문.
const mathScore = 90;
const engScore = 80;
const result = (mathScore + engScore) / 2; 
console.log(result);//(계산성공) = 85

// String()
console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined)
)

//Number()
console.log(
    Number("1234"), //숫자형으로 변환됨.
    Number("1234야호"), //NaN되므로 주의!
    Number(true), // 1
    Number(false) // 0
)

//Boolean()
console.log(
    Boolean(1),
    Boolean(123),
    Boolean("javascript")
) // true
console.log(
    Boolean(0),
    Boolean(""),
    Boolean(null),
    Boolean(undefined),
    Boolean(NaN)
) // false