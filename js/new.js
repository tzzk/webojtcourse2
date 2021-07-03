
var form=document.getElementById('item_form')
form.addEventListener('submit',function(e)
{
    formAction(e);
})
function formAction(e){
    var input=document.getElementById('item_name')
    if(input.value.length>0)
    console.log(input.value)
    else
    console.log('please enter input name')
    e.preventDefault();
}
var add = document.getElementById('Item_form')
add.addEventListener('submit', function (e) {
    var newitem = document.createElement('li');
    var textNode = document.createTextNode('Add')
    newitem.appendChild(textNode)
    console.log(newitem)
    var parent = document.getElementById('item')
    parent.appendChild(new_item)
    new_item.classList.add('list-group-items')
})




