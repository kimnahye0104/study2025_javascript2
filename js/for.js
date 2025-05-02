//반복문 알아보기
console.log('========== 반복문 알아보기 =========');

// for반복문 예시. 1부터 10까지 ---------------------
/*
for(let i = 1; i <= 10; i++){
    //console.log(i); // 0~9까지 나옴. (let i =0; i <10; 일때)
    console.log(i);
}
*/


// while반복문 예시.----------------------
/*
let i = 0;

while(i<10){
    console.log(i); // 이것만 쓰면, i는 10보다 작은 0이므로, 무한 실행으로 브라우저 다운됨!! (주의!!)
    i++;
}
*/


// do while 반복문 예시. (조건이 뒤에 나옴.)

/*
while(true){
    let answer = confirm('계속 할까요?');
    if(!answer){
        break; // '계속 할까요?'에 '취소' 누르면 false값이 반환되어 if반복문 실행 = break가 실행됨.
    }
} //while(true)는 무한반복 조건이니 조심하기!!!!
 */

for(let i = 0; i < 10; i++){
 if(i%2){
    continue;
 }
 console.log(i); //나머지가 1 이면 다시 for문 실행한다.(결과적으로 짝수만 나오게 됨.)
}