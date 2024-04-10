
const calc1 = require("./exports");
const calc2 = require("./moduleExports");

console.log(calc1.add(1, 2));
console.log(calc2.add(1, 2));

/*실행결과 
3
3
*/