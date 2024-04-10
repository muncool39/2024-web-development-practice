// repeat 

// 콜백함수 사용하지 않는 경우
function repeat(count) {
    for(let idx=1;idx<=count;idx++) {
        console.log(idx);
    }
}
function repeatDouble(count) {
    for(let idx=1;idx<=count;idx++){
        console.log(idx*2);
    }
}
repeatDouble(5)


// 콜백함수 사용 (인자로 함수 받음)
function repeat(count, callback) {
	for (let idx = 1; idx <= count; idx++) {
		callback(idx);
	}
}

repeat(5, function (idx) {
	console.log(idx);
});
repeat(5, ()=>console.log(idx));

// Double
repeat(5, function (idx) {
	console.log(idx * 2);
});
repeat(5, ()=>console.log(idx*2));

// Tripple
repeat(5, function (idx) {
	console.log(idx * 3);
});
repeat(5, ()=>console.log(idx*3));

