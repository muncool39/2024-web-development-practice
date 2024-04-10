// 복습

// 1. 기본 함수
function functionSample() {
    console.log("hello")
}
functionSample();
const varA = functionSample;
console.log(varA)

/*실행결과
hello
[Function: functionSample]
*/
 
// 2. 일급객체 - 익명함수 - 이벤트 방식 - 비동기 방식
const varB = function () {
    console.log("event");
}
varB();
console.log();

/*실행결과
event
[Function: varB]
*/

// 3. 화살표 함수 (최대한 축약)
const varC = () => 1;
console.log(varC());

/*실행결과
1
*/

// 4. 매개변수 활용
const varD = (value) => {
    console.log(value);
    return value + 1;
}
console.log(varD(10));

/*실행결과
10
11
*/

// 5. 변수에 할당해 객체처럼 사용
function sampleFunction() {
    console.log("function")
}
const sampleObject = sampleFunction;
sampleObject();

/*실행결과
function
*/