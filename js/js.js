/*{let name="TT";
var mname="tz";
console.log("my name is "+name);
}
 age="35";
 console.log("my age is "+age);
console.log(`my name is ${mname} age is ${age}`);
var rating=4.5;
var married=true;
console.log(`rating is ${rating}`);
console.log(typeof(rating));

var students=['aye','hla','Aung'];
console.log(students[1]);

for(let i=0;i<students.length;i++)
{
    console.log('students '+(i+1)+":"+students[i]);
}

let count=0;
while (count<students.length)
{
    console.log(students[2]);
    count++;
}
var employee={
    name:"tzzk",
    age:21,
    email:"tt@gmail.com",
    salary:2000000,
    checklevel:function(){
        if(this.salary>=100000)
        return"boss"
        else 
        return "employee"
    }
}
console.log(employee.checklevel())

var emp={
    name:"hh",
    salary:2000000,
    checklevel:function () {
        if(this.salary>=20000)
        return "Manager"
        else
        return "PO"
        
    }
}
console.log(emp.checklevel())

function Trainee(name, address) {
   this.Name=name;
   this.Address=address;

}
var t1 = new Trainee("Rose", "M");
var t2 = new Trainee("Pink", "K");
var t3 = new Trainee("Dar", "B");
console.log(t1.Name)
console.log(t2.Address)


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
    name:'pant',
    stock:50000,
    checklevel:function(){
        if(this.stock<500)
        return "Please order more"
        else
        return "OK"
    }
}
console.log(pant.checklevel())
var element=document.getElementById("main_heading")
element.textContent="Aunglan"
element.innerHTML="<span> Aung</span> LAN"
element.classList.add('bg-danger')
var btnRemove=document.getElementById('remove');
btnRemove.onclick=clickEvent;
function clickEvent()
{
    console.log("buttonclicked")
}

var btnEdit=document.getElementById('add');
btnEdit.onclick=clickEdit;

function clickEdit(){
    var item2=document.getElementById('two');
    item2.style.color="Red";

var newitem = document.createElement('li')
var textnode = document.createTextNode('Banana')
newitem.appendChild(textnode)//element and text binding

var parent=document.getElementById('item')
parent.appendChild(newitem)
newitem.classList.add("list-group-item")


var n_item=document.createElement("li")
var textnode=document.createTextNode("Watermelon")
n_item.appendChild(textnode)

parent.appendChild(n_item)
n_item.classList.add('list-group-item')}
var btnAdd=document.getElementById('add')
btnAdd.onclick=addItem;
 function addItem(){
     var n_item=document.createElement('li')
     var textnode=document.createTextNode("Chocolate")
    n_item.appendChild(textnode)
    var pp=document.getElementById('item')
    pp.appendChild(n_item)
    n_item.classList.add("list-group-item")
    }

var btnRemove=document.getElementById('remove')
btnRemove.onclick=removeItem;
function removeItem(){
    var none=document.getElementById("one");
    var parent=none.parentElement;
    parent.removeChild(none)
}*/

var btnRemove=document.getElementById('remove')
btnRemove.addEventListener('click',function(e){
    console.log(e.target)
    var item=document.getElementById('one')
    var parent=item.parentElement;
    parent.removeChild(item)
    console.log(parent.children)
})

var btnAdd=document.getElementById('add')
btnAdd.addEventListener('click',function(e){
    console.log(e.target)
    e.preventDefault();
    var none=document.createElement('li')
    var text=document.createTextNode("Hello")
    none.appendChild(text)
    var pp=document.getElementById('item')
    pp.appendChild(none)
    none.classList.add('list-group-item')
})

var form=document.getElementById('item_form')
form.addEventListener('submit',function(e){
    formAction(e);
})
function formAction(e){
    var input=document.getElementById('item_name')
    if(input.value.length>0)
    console.log(input.value)
    else
    console.log("please enter input name")
    e.preventDefault();//or return false;
}

var checkbox=document.getElementById('show_pwd')
checkbox.onchange=showpwd;
function showpwd(){
    console.log("checked")
    console.log(checkbox.classList);
    if(!checkbox.classList.contains('off')){
        checkbox.classList.toggle('off');
        console.log(checkbox.className);
    }

}
var inputtext=document.getElementById('inputText')
//
inputtext.onkeyup = checkOutput;
function checkInput(){
    console.log('a')
    console.log(inputtext.value)
}
//
function checkOutput(){
    var max=10;
    if(max-inputtext.value.length>0){
        console.log(`remaining cha is :${max-inputtext.value.length}`)     
    }
    else
    {
        inputtext.disableled=true;
    }

}
var mmk=document.getElementById('mmkinput')
var usd=document.getElementById('usdinput')
mmk.onkeyup = changetoUSD;
function changetoUSD()
{
    var mmkvalue=mmk.value
    var usdvalue=mmkvalue/1500
    usd.value=usdvalue.toFixed(2)
}