// ./03async/01callstack/callstack-02.js
// 비동기 진행, 이벤트 방식

console.log("1");
// 이벤트 리스너에 등록 -> 이벤트 핸들러 돌아감
setTimeout(() => console.log(2), 1000);
console.log("3");
