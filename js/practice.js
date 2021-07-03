console.log("Hello world")
document.write("Tin Zar Zar Khaing")
//window.alert("Hello from TZZK world")

{
    let name = "Dary";
    var myname = "TZZK";
    console.log("My name is " + name);
    
}
console.log("my name is external scope "+name);
console.log("my name is " +myname);

age="35"
console.log("my age is "+age);

console.log(`my name is ${myname} age is ${age}`);
var rating=4.5;
var married=true;
console.log(`rating is ${rating}` );
console.log(`He is married (${married})`);
console.log(typeof(rating));
console.log(typeof (married));

var students=["aye","Hla","Mya"];
console.log(students)
console.log(students[2])

var teacher=["Hla","Wa","Aung"]
console.log(teacher)
console.log(teacher.length)

for(let i=0; i<students.length;i++)
{
    console.log('students '+(i+1)+":"+students[i])
}

let count=0;
while (count<students.length){
    console.log(students[2]);
    count++;
}

var employee={
    name:"TZZK",
    Age:24,
    Grade:'Third',
    email:"tk@gmail.com",
    salary:2300000,
    checklevel:function(){
        if(this.salary>=10000)
        return "boss"
        else
        return "employee"

    }
}
console.log(employee.checklevel())

var employee2 = {
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
console.log(employee2.checklevel())

function Trainee(name,address){
    this.name=name;
    this.address=address;

}
var t1=new Trainee("Rose","M");
var t2=new Trainee("Pink","K");
var t3=new Trainee("Dar","B");
console.log(t1.name)
console.log(t2.address)

for(const prop in t1){
    [
        console.log(prop + "="+t1[prop])
    ]
}
print_out(t1)
function print_out(obj){
    for(const prop in obj){
        console.log(prop+":"+obj[prop])
    }
}

var pant={
    name:"pant",
    stock:5000,
    checklevel:function(){
        if(this.stock<3000)
        return "need to order"
        else
        return "enough"
    }
}
console.log("pant :"+pant.checklevel())
