// 화살표 함수

// 함수
function add(x, y) {
    return x + y;
}
// 일급객체 , 익명함수
const add2 = function (x, y) {
    return x + y;
}

// 화살표 함수
const add3 = (x, y) => {
    return x + y;
}
// return 생략
const add4 = (x, y) => x + y;
const add5 = (x, y) => (x + y);


