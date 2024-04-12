// 외부모듈 lodash 를 활용해 중복 제거

const _ = require('lodash');

const arr = [1,1,1,1,2,2,2,3,3,2,1];
const uniqueArr = _.uniqBy(arr);

console.log(uniqueArr);

/*실행결과
[ 1, 2, 3 ]
*/