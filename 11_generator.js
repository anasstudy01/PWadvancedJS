function* gen(){


yield 1;
yield 2;
yield 3;
yield 4;

}

x= gen();
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
console.log(x.next())
