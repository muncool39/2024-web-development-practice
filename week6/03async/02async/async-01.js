
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0); // 0초여도 나중에 출력됨
console.log("C");
