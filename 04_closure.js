// A closure is a function that has access to its own scope, the outer function's scope, and the global scope. This means that a closure can access and manipulate variables that are defined in its parent function, even after the parent function has returned.


function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log('outerVariable:', outerVariable);
      console.log('innerVariable:', innerVariable);
    }
  }
  
  const newFunction = outerFunction('outside');
  newFunction('inside'); // logs "outerVariable: outside", "innerVariable: inside"