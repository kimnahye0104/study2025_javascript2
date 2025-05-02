console.log("====== if문 알아보기 ====== ");
// 조건문 알아보기-------------

const age = 18;
console.log(`내 나이는 ${age} 입니다.`);

/*
if(age > 19){
    console.log('환영합니다.');
}
if(age <= 19){
    console.log('안녕히가세요.')
};
*/


// else 활용하기-------------
/*
if(age > 19){
    console.log('환영합니다.');
} else {
    console.log('안녕히가세요.')
};
*/

// 추가 요구사항 :
// 19살이면 수능 잘치세요. 라는 문구를 보여주세요.
// 일치연산자 ===을 써야 할까?
// else if 써서 조건을 상세하게 실행해보기!

if(age > 19){
    console.log('환영합니다.');
} else if(age === 19){
    console.log('수능 잘치세요.')
} else {
    console.log('안녕히가세요.')
};






