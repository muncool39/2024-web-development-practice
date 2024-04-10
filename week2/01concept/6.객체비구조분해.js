// 객체 비구조분해 -> 필요한 데이터만 추출

// Object
function getPerson() {
    return {
        firstName : "siwon",
        lastName : "mun",
        age : 23,
        manAge : 20
    };
}

const {age, manAge} = getPerson();
console.log(age);
console.log(manAge);
/*실행결과
23
20
*/

const getName = ({firstName, lastName}) => {
    console.log(`Name: ${firstName} ${lastName}`);
}
getName(getPerson());
/*실행결과
Name: siwon mun
*/