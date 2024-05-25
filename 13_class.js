class products {

//properties -> class members/data members
name;
price;
description;
image;


constructor(name,price,description,image){
    this.name = name;  
    this.price = price;
    this.description = description;
    this.image = image;
}

// behaviours --> class methods / member functions
buyproduct(){
    console.log("bought  a new products");
}


}

const obj1 = new products("sam","100","laptop","24");
console.log(obj1);
const obj2 = new products("sam","100","laptop","24");
console.log(obj1);
const obj3 = new products("sam","100","laptop","24");
console.log(obj1);