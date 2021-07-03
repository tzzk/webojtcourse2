//test document objects
/*console.log(document.URL)
console.log(document.head)
console.log(document.doctype)
console.log(document.title)
console.log(document.body)
console.log(document.all)
console.log(document.all[2])
console.log(document.forms);

//test elementbyId
var element=document.getElementById("main_heading");
console.log(element)
element.textContent = "ABC Store (Mandalay Branch)";
element.innerHTML = "<span> ABC Store</span> Mandalay Branch"

//add element's css
element.style.color="red"
element.style.backgroundColor="yellow"
element.style.fontWeight="bold"

//add bootstrap class to element
element.classList.add("bg-dark")
element.classList.add("text-success")

var element = document.getElementById("sub_heading");
element.textContent = "Food and Drinks";
element.style.color = "red"
element.style.backgroundColor = "pink"
element.style.fontWeight = "bold"
element.classList.add("bg-black")
element.classList.add("text-success")

var element = document.getElementById("item_form");
element.textContent = "Hello";
element.style.color = "blue"
element.style.backgroundColor = "gray"
element.style.fontWeight = "bold"
element.classList.add("bg-black")
element.classList.add("text-success")

var element = document.getElementById("sub_heading");
element.textContent = "Food and Drinks";
element.style.color = "red"
element.style.backgroundColor = "pink"
element.style.fontWeight = "bold"
element.classList.add("bg-black")
element.classList.add("text-success")


//select element by class name
var elements = document.getElementsByClassName("list-group-item")
console.log(elements)
console.log(elements[0])
elements[0].textContent="Hi"
elements[1].textContent = "Yeah"
elements[2].textContent = "Hello"
elements[0].style.backgroundColor="#e9b298"
elements[1].style.backgroundColor="#98cfe9"
elements[2].style.backgroundColor = "#e9b298"
elements[3].style.backgroundColor = "#98cfe9"

for(let i=0;i<elements.length;i++)
{
    elements[i].style.color="white"
    //customize css
    elements[i].classList.add('item')
    console.log(elements[i])

}
 var c=document.getElementsByClassName('card card-body')
 console.log(c)
 c[0].classList.add('bg-primary');

//elements[0].classList.add("bg")
var elements=document.getElementsByTagName('ul');
console.log(elements)
console.log(elements[0])
elements[0].style.color="red"

var items=document.getElementsByTagName('li')
console.log(items)
items[0].textContent="Jacket"

var divs=document.getElementsByTagName('div')
console.log(divs)
divs[0].classList.remove('bg-primary')
divs[0].classList.add('bg-success')
console.log(divs[0])

divs[0].classList.add('border')
divs[0].classList.add('border-warning')
divs[0].classList.add('border-3')

var btn=document.getElementsByTagName('button')
btn[0].style.backgroundColor="red"
btn[1].style.backgroundColor = "Yellow"
btn[0].classList.add('button')

//using queryselector
var item=document.querySelector('#one');
console.log(item)
var items=document.querySelector('.list-group-item')
console.log(items)
var second_item=document.querySelector('.list-group-item:nth-child(2)')
console.log(second_item)
var third_item = document.querySelector('.list-group-item:nth-child(3)')
console.log(third_item)
var last = document.querySelector('.list-group-item:last-child')
console.log(last)

var list_items=document.querySelector('li')
console.log(list_items)
var second_item=document.querySelector('li:nth-child(2)')
console.log(second_item)

var list_items=document.querySelectorAll('li')
console.log(list_items)


//dom traversal
var item=document.getElementById('one');
console.log(item.parentElement)
console.log(item.nextSibling)*/

//create new element
/*var newitem=document.createElement('span')
var textnode=document.createTextNode('New Item')
newitem.appendChild(textnode)//element and text binding
item.appendChild(newitem)//add new element into existing elements

console.log(item.children)

var item5 = document.createElement('li')
//item5.appendChild(document.createElemen('item5'))
item5.appendChild(document.createTextNode('Item 5'))
var parent=document.getElementById('item')
parent.appendChild(item5)
item5.classList.add('list-group-item')*/


//EVENTS

//2nd ways of events

var btnRemove=document.getElementById('remove');
btnRemove.onclick=clickEvent;



//1st ways of events
function clickEvent(){
    console.log("button clicked")
    var item1=document.getElementById('one');
    item1.style.backgroundColor="cyan";
   
}
var btnEdit=document.getElementById('edit');
btnEdit.onclick=clickEdit;

function clickEdit(){
    var item2=document.getElementById('two');
    item2.style.backgroundColor="yellow";
}


//if you click add button,add a new item */

//if you click remove button, remove "item1"
/*var btnRemove=document.getElementById('remove')
btnRemove.onclick=removeItem;
function removeItem(){
    var item=document.getElementById('one')//phal chin tae item ko Id nae call tal
    var parent=item.parentElement;//item yae parent ko shar tar
    parent.removeChild(item);
}

var btnAdd = document.getElementById('add')
btnAdd.onclick = addNewItem;
function addNewItem() {
    var new_item = document.createElement('li') //parent group name
    var textNode = document.createTextNode("Item 5")
    new_item.appendChild(textNode)
    console.log(new_item)
    var parent = document.getElementById('item')// parent yae Id
    parent.appendChild(new_item)
    new_item.classList.add('list-group-items')

} */

/** Event Listener */

var btnRemove=document.getElementById('remove')
btnRemove.addEventListener('click',function(e){
    console.log(e.target)
    var item=document.getElementById('one')
    var parent=item.parentElement;
    parent.removeChild(item)
    console.log(parent.children)
})

var btnEdit=document.getElementById('add')
btnEdit.addEventListener('click',function (e){
    console.log(e.target)
    e.preventDefault();
    
})

//form return
var form=document.getElementById('item_form')
form.addEventListener('submit',function(e){
    formAction(e);
})

function formAction(e)
{
    var input=document.getElementById('item_name')
    if(input.value.length>0)
    console.log(input.value)
    else
    console.log("please enter input name")
    return false;
    e.preventDefault();
}


//Onchange function for checkbox//


var checkbox=document.getElementById('show_pwd');
//checkbox.className="on";
checkbox.onchange=showpwd;//option 1
//checkbox.addEventListener('change,showpwd);//option2

function showpwd()
{
    console.log('checked');
    console.log(checkbox.classList);
    if(!checkbox.classList.contains('off'))
    {
        checkbox.classList.toggle('off');
        console.log(checkbox.className);
    }
}

//select function

var sel_month=document.getElementById('month');
sel_month.addEventListener('change',changeSelect)

function changeSelect()
{   
    //get the value
    var month_value=sel_month.value
    console.log(month_value);

    //get the text
    var month_text=sel_month.options[sel_month.selectedIndex].text;
    console.log(month_text)
    
    //get the select lengths
    console.log(sel_month.options.length)

    //get the select lengths
    for(var i=0;i<sel_month.options.length;i++)
    {
        if(sel_month.options[i].selected)
        {
            console.log(`${i} is selected`)
        }
        
    }
    var message = document.getElementById('message')
    if (month_value < 1) {
        
        message.innerText = "Please choose month";

    }
    else{
        message.innerText="";

    } 
}
var month_value = sel_month.value;


//keys

var inputtext=document.getElementById('inputText')
//inputtext.onkeydown=checkInput;
//inputtext.onkeypress=checkInput;
inputtext.onkeyup=checkOutput;


function checkInput()
{
    console.log('a')
    console.log(inputtext.value)
}

function checkOutput()//onkeyup function
{
    var max=10;
    if(max-inputtext.value.length>0)
    {
        console.log(`remaining characters : ${max-inputtext.value.length}`)
    }
    else{
        inputtext.disableled=true;
    }

}

//for Currency exchange calculation

var mmk=document.getElementById('mmkinput')
var usd=document.getElementById('usdinput');


mmk.onkeyup=changetoUSD;
//usd.onkeyup=changetoMMK;
 function changetoUSD()
 {
     var mmkvalue=mmk.value
     var usdvalue=mmkvalue/1500;
     usd.value=usdvalue.toFixed(2);//decimal place (.toFixed(2))
 }

usd.onkeyup = changetoMMK;
 function changetoMMK()
 {
     var usdvalue=usd.value
     var mmkvalue=usdvalue*1500;
     mmk.value=mmkvalue
 }

 

