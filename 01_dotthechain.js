function createpromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("called promised");

      reject(time);
    }, time);
  });
}

const pr1 = createpromise(2000);
console.log("pr1",pr1);

const pr2 = pr1.then((resolve)=>console.log(`resolving with pr1`),(reject)=>console.log(`rejecting with pr 1`))