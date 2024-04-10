// 화살표 함수 - 인자 x

// 함수
function foo() {
    console.log('foo');
};
foo();

// 화살표 함수
const bar = () => {
    console.log('bar');
};
bar();

const foo2 = () => ('foo2'); 
const bar2 = () => { return 'bar2' };

console.log(foo2());
console.log(bar2());
