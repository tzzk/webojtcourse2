/*var elements=document.getElementsByClassName("list-group-item")
console.log(elements[0])
elements[0].textContent="Noodle"
elements[1].textContent="Drinking Water"
elements[2].textContent="jucie"

elements[0].style.backgroundColor="#e9b298"
elements[1].style.backgroundColor="#e9b298"
elements[2].style.backgroundColor = "#e9b298"
elements[3].style.backgroundColor = "#e9b298"
elements[0].innerHTML ="<h3 style=background-color:red>Noodle</h3>"

for(let i=0;i<elements.length;i++)
{
    elements[i].style.color="white"

    elements[i].classList.add("item")//css nae link lote tar
    console.log(elements[i])
}
var card=document.getElementsByClassName("card card-body")
card[0].classList.add("bg-light")//Class mar card p ma card-body lar lo array form phit thwar tal dar kyaunt [] room put pay ya tar
*/


/*var elements=document.getElementsByTagName('ul')
console.log(elements)
console.log(elements[0])
elements[0].style.color="red"

var items=document.getElementsByTagName('li')
items[0].textContent="jacket"

var divs=document.getElementsByTagName('div')
divs[0].classList.remove('bg-primary')
divs[0].classList.add('bg-success')
console.log(divs[0])
//div[0] border color yellow using customize css
//divs[0].classList.add('fluid')
//bootstrap css
divs[0].classList.add('border')
divs[0].classList.add('border-warning')
divs[0].classList.add('border-3')

var cols=document.getElementsByClassName('remove')
console.log(cols)
cols[0].classList.add('bg-danger')
var col = document.getElementsByClassName('edit')
col[0].classList.add('bg-warning')

cols[0].classList.add('input')
col[0].classList.add('input')*/

//query selector
/*var item=document.querySelector('#one')// id call yin # ko htae yan
console.log(item)
var items=document.querySelector('.list-group-item')//class ko call yin . ko htae yan
console.log(items)
var seconditem=document.querySelector('.list-group-item:nth-child(2)')
console.log(seconditem)
var third=document.querySelector('.list-group-item:nth-child(3)')
console.log(third)
var list=document.querySelector('li')
console.log(list)
var list_group=document.querySelectorAll('li')
console.log(list_group)
var odd=document.querySelectorAll('li:nth-child(odd)')
console.log(odd)
var even=document.querySelectorAll('li:nth-child(even)')
console.log(even)

for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor="#f0f0f0";
    even[i].style.backgroundColor="#ccc";
}

var btn=document.querySelectorAll('input')
console.log(btn)
for(let i=0;i<btn.length;i++)
{
    btn[2].style.color="green";
    btn[3].style.backgroundColor="blue"
}
//dom traversal
var item=document.getElementById('one')
console.log(item.parentElement)
console.log(item.nextSibling)

//create element
var newitem=document.createElement('span')//element tag
var textnode=document.createTextNode('New Item')//create text within tag=><span>New Item</span>
newitem.appendChild(textnode)//element and text binding
item.appendChild(newitem)//adding element into existing li(element)

var item_ul=document.getElementById('items')
var newli=document.createElement('li')
var text=document.createTextNode('Item5')
newli.appendChild(text)
item_ul.appendChild(newli)
newli.classList.add('list-group-item')
console.log(item_ul.children)
*/
 var input=document.getElementById('item_name')
 input.addEventListener('focus',function(e)
 {
     console.log("Hello")
     var message=document.getElementById('message')
     message.innerHTML="Please choose one"
 })
 input.addEventListener('blur',function(e)
 {
     console.log("hote")
     if(input.value.length<=0){
         var message = document.getElementById('message')
         message.innerHTML = "You are mine"
     }
 })

var sel_month = document.getElementById('month');
sel_month.addEventListener('change', changeSelect)

function changeSelect() {
    //get the value
    var month_value = sel_month.value
    console.log(month_value);

    //get the text
    var month_text = sel_month.options[sel_month.selectedIndex].text;
    console.log(month_text)

    //get the select lengths
    console.log(sel_month.options.length)

    //get the select lengths
    for (var i = 0; i < sel_month.options.length; i++) {
        if (sel_month.options[i].selected) {
            console.log(`${i} is selected`)
        }

    }
    var message = document.getElementById('message')
    if (month_value < 1) {

        message.innerText = "Please choose month";

    }
    else {
        message.innerText = "";

    }
}
var month_value = sel_month.value;
 