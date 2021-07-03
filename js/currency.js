var sel_moneyunit1=document.getElementById('exchange_unit1')
var sel_moneyunit2=document.getElementById('exchange_unit2')

var input1=document.getElementById('selectinput1')
var input2=document.getElementById('selectinput2')

input1.value=1500;
input2.value=1;

input1.onkeyup=MMKtoUSD;
input2.onkeyup=USDtoMMK;

function MMKtoUSD1(){
    input2.value=input1.value*1500
}