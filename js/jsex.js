

function Products(name,code,stock,warehouse){
    this.name=name;
    this.code=code;
    this.stock=stock;
    this.warehouse=warehouse;
}

var product1=new Products("Jacket","001","600","A1");
var product2 = new Products("Pants", "002", "300", "A0");
var product3 = new Products("Suit", "003", "800", "A4");
var product4 = new Products("Clothng", "004", "675","A5");

display(product1)
console.log(checkStock(product1));
display(product2)
console.log(checkStock(product2));
display(product3)
console.log(checkStock(product3));
display(product4)
console.log(checkStock(product4));

function checkStock(product)
{
    if(product.stock<=500)
        return "need to order"
    else
    return "enough to sell"
}

function display(product) 
{
    for(const prop in product)
    console.log(prop +":"+product[prop])
}


