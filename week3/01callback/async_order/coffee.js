// 비동기 처리

function orderCoffee(coffee, time) {
    setTimeout(()=>{
        console.log(`${coffee} 제조 완료`)
    }, time);
}

orderCoffee('아메리카노', 5000);
orderCoffee('헤이즐넛커피', 3000);
orderCoffee('아이스티샷추가',4000);

/*실행결과
헤이즐넛커피 제조 완료
아이스티샷추가 제조 완료
아메리카노 제조 완료
*/