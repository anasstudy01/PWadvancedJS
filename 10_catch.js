function createPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`timer started`);
      let error = 1;
      if ((error = 0)) {
        console.log(`your code is executed `);
        resolve(time);
      } else {
        console.log(`your code is rejected`);
        reject(time);
      }
    }, time);
  });
} 

testing1 = createPromise(1000);

testing1
  .then((value) => {
    console.log(`your code is arrived at testing one ${value} `);
  })
  .catch((value) => {
    console.log(`your code is arrived at .catch ${value}`);
  });
