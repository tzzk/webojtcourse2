function formAction(e) {
    var input=document.getElementById('names')
    if(input.value.length>0)
    console.log(input.value)
    else
    console.log("fill the blank")
    e.preventDefault();
}
var add=document.getElementById('form')
add.addEventListener('submit',function(e){
    var newitem=document.createElement("li");
    var input=document.getElementById('names')
    if(input.value.length>0){
        var textnode=document.createTextNode(input.value);
        newitem.appendChild(textnode);
        console.log(newitem);
        var parent=document.getElementById("items")
        parent.appendChild(newitem);
        newitem.classList.add('list-group-item');

    }
    else{
        console.log("fill the blank");
    }
    e.returValue=false;    
})