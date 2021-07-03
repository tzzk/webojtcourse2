console.log("JS revision in external")


//outputs
document.write("js rev");
window.alert("Hello from alert box");

//variables
{
    let name="Dary";
    var myname="TZZK";
    console.log("My name is "+name);
}
console.log("My name in external scope"+name);
console.log("My name is "+myname);
age = "35"//give error
console.log("my age is"+age);

console.log(` my name is ${myname} age is ${age}`);

var rating=4.5;
var married=true;

console.log(` rating is ${rating}`);
console.log(` He is married (${married})`)
console.log(typeof (rating));//type
console.log(typeof (married)); //type

//arrays
var students=["Aye","Nu","Toe"];
console.log(students);
console.log(students[0]);

var teachers =new Array("Aye", "Nu", "Toe");
console.log(teachers);
console.log(teachers.length);

for (let i= 0; i < students.length; i++) {
    console.log(" students "+(i+1)+ ":" +students[i]);

    
}
let count=0;
 while (count<students.length) {
     console.log(students[count]);
     count++;
     
 }

 //objects
 var employee={
     name:"Dary",
     position:"Manager",
     salary:100000000,
     email:"dary@gmail.com",
     address:"MDY",
     //level sit chin
     checklevel:function(){
        if(this.salary>=1000000)
        return "admin";
        else
        return "non-admin";
     }
 }

 console.log(employee)
 console.log(employee.name)
 console.log(employee.checklevel());

var employee2= {
    name: "DD",
    position: "Manager",
    salary: 800000,
    email: "dd@gmail.com",
    address: "YGN",
    //level sit chin
    checklevel: function () {
        if (this.salary >= 10000000)
            return "admin";
        else
            return "non-admin";
    }
}


console.log(employee2);

//function

function Trainee(name,address) {
    this.name=name;
    this.address=address;
    
}
var trainee1=new Trainee("Rose","MDY");
var trainee2=new Trainee("Moe","YGN");
var trainee3=new Trainee("Dar","BAGO");
console.log(trainee1)
console.log(trainee2)
console.log(trainee1.address);

for(const prop in trainee1){[
    console.log(prop +" ="+trainee1[prop])
]}

for (const prop in trainee2) {
    [
        console.log(prop + " =" + trainee2[prop])
    ]
}

for (const prop in employee2) {
    [
        console.log(prop + " =" + employee2[prop])
    ]
}
print_out(trainee1)
print_out(trainee2)
// functions
function print_out(obj){
    for(const prop in obj){
        console.log(prop +":"+obj[prop]);
    }
}

var product1 = {
    name: "Jacket",
    code: 001,
    stock: 1200,
    warehouse: "MDY",
    checklevel: function () {
        if (this.stock < 500)
            return "need to order";
        else
            return "enough to sell";
    }
}
console.log("Jacket : " + product1.checklevel())
var product2 = {
    name: "pants",
    code: 002,
    stock: 400,
    warehouse: "MDY",
    checklevel: function () {
        if (this.stock < 500)
            return "need to order";
        else
            return "enough to sell";
    }
}
console.log("Pants : " + product2.checklevel())
var product3 = {
    name: "Suit",
    code: 003,
    stock: 200,
    warehouse: "MDY",
    checklevel: function () {
        if (this.stock < 500)
            return "need to order";
        else
            return "enough to sell";
    }
}
console.log("Jacket : " + product3.checklevel())
var product4 = {
    name: "clothing",
    code: 012,
    stock: 700,
    warehouse: "MDY",
    checklevel: function () {
        if (this.stock < 500)
            return "need to order";
        else
            return "enough to sell";
    }
}
console.log("clothing : " + product4.checklevel())

function Products(name, code, stock, warehouse) {
    this.name = name;
    this.code = code;
    this.stock = stock;
    this.warehouse = warehouse;
}

var product1 = new Products("Jacket", "001", "600", "A1");
var product2 = new Products("Pants", "002", "300", "A0");
var product3 = new Products("Suit", "003", "800", "A4");
var product4 = new Products("Clothng", "004", "675", "A5");

display(product1)
console.log(checkStock(product1));
display(product2)
console.log(checkStock(product2));
display(product3)
console.log(checkStock(product3));
display(product4)
console.log(checkStock(product4));

function checkStock(product) {
    if (product.stock <= 500)
        return "need to order"
    else
        return "enough to sell"
}

function display(product) {
    for (const prop in product)
        console.log(prop + ":" + product[prop])
}