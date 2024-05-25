function product (n,p,d,i){

this.name = n;
this.price = p;
this.discription = d;
this.image = i;

this.display = function(){
    console.log(this.name,this.price,this.discription)
}
}
const p1 = new product("india","200","advanced courntry","manglo");

console.log(p1)
p1.display();