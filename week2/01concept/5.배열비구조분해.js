// 배열 비구조분해

const fruits = ['사과','복숭아','배','포도'];
const [apple, peach] = fruits;
console.log(apple);
console.log(peach);
/*실행결과
사과
복숭아
*/

function getScore() {
    return [70, 80, 90];
}
const [x, y] = getScore();
console.log(x)
console.log(y)
/*실행결과
70
80
*/