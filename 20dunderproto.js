function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old.`);
  };
  
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 25);
  
  console.log(person1.__proto__ === Person.prototype); // Output: true
  console.log(person2.__proto__ === Person.prototype); // Output: true
  
  person1.sayHello(); // Output: Hello, I'm Alice and I'm 30 years old.
  person2.sayHello(); // Output: Hello, I'm Bob and I'm 25 years old.