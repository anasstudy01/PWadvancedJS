

function* gen(){
    yield 10;
    console.log("middle");
    const x = 10+ (yield 30);
    console.log(x);
    yield x;
}