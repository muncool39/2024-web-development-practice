// 일급객체

/*  더하기 함수 add
function add(a, b) {
    return a + b;
}
console.log(add(2,4));
*/

// 변수 add 에 함수를 할당 / 할당되는 함수는 익명 함수
var add = function (a, b) {
    return a + b;
}
var result = add(4, 2);

console.log('더하기(4,2): %d', result);