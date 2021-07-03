var addBtn=document.getElementById('addbtn');
addBtn.addEventListener('click',function(){
    var newtask=document.getElementById('new-task').value;
    //create elements
    var li=document.createElement('li')
    var checkbox=document.createElement('input')//input htae ka checkbox ko create chin 
    checkbox.type='checkbox';
    var newtasklabel=document.createElement('label');
    newtasklabel.innerText=newtask;
    var textbox=document.createElement('input');
    textbox.type='text'
    var editbtn=document.createElement('button')
    editbtn.className='edit'
    editbtn.innerText="Edit"
    var deletebtn=document.createElement('button')
    deletebtn.className='delete'//dar ka button pae
    deletebtn.innerText="Delete" //for text paw phoe

    //a paw ka fact ko appendchild htae put chin 
    li.appendChild(checkbox)
    li.appendChild(newtasklabel)
    li.appendChild(textbox)
    li.appendChild(editbtn)
    li.appendChild(deletebtn)

    //parent htae put chin
    var ul=document.getElementById('incomplete-tasks')
    ul.appendChild(li)
    document.getElementById('new-task').value=""

    //for events(btn) of Edit and Delete
    editbtn.onclick = editTask;
    deletebtn.onclick=deleteTask;
    checkbox.onchange=completeTask;
})
function editTask(){
    var li=this.parentNode;
    var text=li.querySelector('input[type=text]')
    console.log(text)
    if(!text.classList.contains('edit'))
    {
        text.value=li.querySelector('label').innerText;
        text.style.display="block";
        text.className="edit";
        li.querySelector('label').innerText="";
    }
    else{
        li.querySelector('label').innerText=text.value;
        text.style.display="none"
    }
    console.log(text.value)
}
function deleteTask(){
     var li=this.parentNode;
     var ul=li.parentNode;
     ul.removeChild(li)
    
}

 function completeTask() {
     var incomli=this.parentNode;
     var incomul=incomli.parentNode;
     incomul.removeChild(incomli);
     var comul=document.getElementById('completed-tasks')
     comul.appendChild(incomli);
     this.onchange=incompletask;
     
 }
 function incompleteTask(){

 }

