// add 함수 callback 방식

function add(a, b, callback) {
    var result = a + b;
    callback(result);
}

add(3, 7, function(result){
    console.log(`결과(콜백함수): ${result}`);
})