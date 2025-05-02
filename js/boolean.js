console.log('===== 논리연산자 알아보기 ======')

// or 연산자 ---------------
// 이름이 tom이거나, 성인이면 통과

const name = "Tom";
const Age = 30;
/*
if(name === 'Tom' || Age > 19){
    console.log('통과');
}
*/ 
// 이름은 Tom이 아니지만, 성인이라 통과.


// and 연산자 ----------------------
/*
if(name === 'Mike' && Age > 19){
    console.log('통과');
} else {
    console.log('돌아가.');
}
*/
// 둘 중 하나라도 false면 '돌아가'


// not -----------------------------
// 나이를 입력받아 성인 아니면 돌아가라고..

/*
const AGE = prompt('나이가 어떻게 되세요?');
const isAdult =  AGE > 19; // 19보다 큰 값이 들어오면 isAdult 변수는 true.

if(!isAdult){
    console.log('돌아가..');
}
console.log('-----------')
*/




// 논리 연산자의 우선순위
// 남자이고, 이름이 Mike 이거나 성인이면 통과.

const gender = 'M';
const NAME =  'Jane';
const isAdult = true;

// if(gender === 'M' && NAME === 'Mike' || isAdult)
if(gender === 'M' && (NAME === 'Mike' || isAdult)){
 console.log('통과.')
} else {
    console.log('돌아가.')
}