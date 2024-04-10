// food callback

function orderFood(callback) {
    setTimeout(()=>{
        const food = "음식";
        callback(food);
    }, 3000);
}

function cool(food, callback) {
    setTimeout(()=>{
        const coolFood = `차가운 ${food}`;
        callback(coolFood);
    }, 1000);
}

function freeze(food, callback) {
    setTimeout(()=>{
        const freezeFood = `냉동된 ${food}`;
        callback(freezeFood);
    }, 5000);
}

// 문제점
orderFood((food)=>{
    console.log(food);
    cool(food, (coolFood)=>{
        console.log(coolFood);
        freeze(food, (freezeFood)=>{
            console.log(freezeFood);
        });
    });
});

/*실행결과
음식
차가운 음식
냉동된 음식
*/