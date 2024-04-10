// callback 기초

// 메인
function main(value) {
    value(); // 서브 호출
}
// 서브 - 콜백함수
function sub() {
    console.log("sub");
}

main(sub);

// sub 함수 정의하지 않고 익명함수 전달로 사용
main(function(){
    console.log("sub");
})
// 화살표 함수로 압축
main(()=>console.log("sub"))

/*출력결과
sub
sub
sub
*/