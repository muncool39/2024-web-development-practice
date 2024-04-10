// module.exports 로 모듈 내보내는 경우

const calc = {};
calc.add = (a, b) => a + b;
calc.minus = (a, b) => a - b;

module.exports = calc;

