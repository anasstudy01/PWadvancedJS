function createPromise(time) {
  return new Promise((res, rej) => {
      setTimeout(() => {
          rej(time);
      }, time);
  });
}

createPromise(1000)
.then(function f(value) {
  console.log("Value in first then", value);
  return value*2;
},function r1(value){ "rejecting with r1",value
    throw 10
}) 
.then(function g(value) {
  console.log("Value in second then", value);
  return value*2;
},function r2(value){ "rejecting with r1",value
return 100
}) 
.then(function h(value) {
  console.log("Value in third then", value);
  return value*2;
}); 

// to handle case of promise chaining where rejection handler is missing we can use . catch