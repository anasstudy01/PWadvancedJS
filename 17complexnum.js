class complex{

constructor(real,imag){
    this.real=real ;
    this.imag = imag;

}
add(num){
    return `${this.real+num.real} +i${this.imag+num.imag}`
}


multiply(num){

return `${this.real*num.real}-${this.imag*num.imag}+i${this.real*num.real}+${this.imag*num.imag}`

}

}

const p1 =new complex(3,5);
const p2= new complex(4,4);
console.log(p1.add(p2));
console.log(p1.multiply(p2))


