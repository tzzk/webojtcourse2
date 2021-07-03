 //for selecct
var sel_package=document.getElementById('package');
sel_package.addEventListener('change',changeSelect)
function changeSelect()
{
    var package_value=sel_package.value;
    var message = document.getElementById('packageHint');
    if (package_value=="annual")
        {

        message.innerText = "Great";

    }
    else {
        message.innerText = "Save 60000 MMK if you pay for annual";

    }
}
var package_value = sel_package.value;
// checkbox


var form=document.getElementById('formSignup')
form.addEventListener('submit',checkTerms)
function checkTerms(e)
{
    console.log("checked")
    var checkbox=document.getElementById('terms');
    if(!checkbox.checked)
    {
        console.log("checked")
        document.getElementById('termHints').innerText="You must agree to the terms"

    }
    else{
        document.getElementById('termHints').innerText =""
    }
    e.returnValue=false;
}



