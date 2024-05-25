const obj = {
  x:cd10,
  y:20,
  display: () => {
    console.log(`value of x is ${this.x} and value of y os ${this.y}`);
  },
};
obj.display();
