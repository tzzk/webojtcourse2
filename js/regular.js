//matching 

var checkbtn=document.getElementById('check')
checkbtn.addEventListener('click',checkPattern)
function checkPattern()
{
    var pattern=/gmail/
    var username=document.getElementById('input1')
    console.log(pattern.test(username.value))

}

//phone number check /09/

var checkphone=document.getElementById('checkph')
checkphone.addEventListener('click',checkPattern)
function checkPattern()
{ 
    var pattern=/09/
    var phone=document.getElementById('input2')
    console.log(pattern.test(phone.value))
    var output=pattern.test(phone.value)
    if(output){
        window.alert('correct')
    }
    else
    window.alert("Try again")
}

//using (.fliter) to check string
 var gmails=['tt@gmail.com','hello@yahoo.com','kky@gamil.com']
 var pattern=/@gmail.com/
 console.log(gmails.filter(gmail =>pattern.test(gmail)))//gmail means each room for gmail from gmails and it is assigned by =>
//get the animal names which include 'or'

 var animals=['kangroo','lion','leopard','tortoise','alligator']
 var pattern=/or/
 console.log(animals.filter(animal =>pattern.test(animal)))


 // replac (to insert - )
 var cardno='4689 0000 0034 341'
 cardno.replace(/ /,'-')
 console.log(cardno.replace(/ /,'-'))
 console.log(cardno.replace(/ /g,'-'))

 var phoneno='09 43658000'//replace with -
 phoneno.replace(/ /,'-')
console.log(phoneno.replace(/ /, '-'))

var date="05-06-2021"
date.replace(/-/,'/')
console.log(date.replace(/-/g, '/'))

var str='par spare tear bear ear'//replace er with X
str.replace(/Ar/,'X')
console.log(str.replace(/Ar/g, 'X'))


//  using ^ (first word)
var phone_pattern=/^09/
console.log(phone_pattern.test('9262183502'))

//using $(last word)
var email_pattern=/.com$/
console.log(email_pattern.test('khaing@gmail.com'))

// using \b (starting and ending words)
var str="par spare tear bear ear"//replace ar at the end of the word with X
str.replace(/\bar/g,'X')
console.log(str.replace(/\bar/g, 'X'))

var PH='09533328'
console.log(PH.replace(/^095/,'+95'))

var telph='023456'
console.log(telph.replace(/^02/,'(02)'))

var strings="hello \nhow are you \nhow do you do"
console.log(/^how/m.test(strings))
console.log(strings.replace(/^how/mg,'How'))

var domain_pattern=/(.com|.net|.org|.edu)$/ //constructing domains
console.log(domain_pattern.test('.org.hostmyanmar'))

var no_pattern=/^(09|02|01|03)/
console.log(no_pattern.test("09262667"))

var text_pattern=/^(b|t)ear$/
console.log(text_pattern.test("spear"))

var word_pattern=/[bt]ear/ //[] means any word within [] can include
console.log(word_pattern.test('spear'))

var ph1=/^0[1289]/
console.log(ph1.test('015508790'))

var ph1 = /^0[1-9]/ //[1-9 means 1 to 9 all number can be]
console.log(ph1.test('015508790'))

//car no:4I -55777
var car=/^[1-9][A-Z]?-/
console.log(car.test('4IP-'))

//cycle no:7MDY-83319

var cycle=/^[1-9][A-Z]*-/
console.log(cycle.test('7MDY-'))

var cycle1=/^[1-9][A-Z]+-[0-9]{5}$/
console.log(cycle1.test('7MDY-83319'))

//Test dot character

var pattern=/a.{1,4}e/g
console.log('apples are sweet'.replace(pattern,'X'))
console.log('tac tin c.t abc;tuv acute'.replace(/c.t/g,'X'))

//test metacharacters( * & $ % # .....) to use \
//(b^2)*3
pattern=/\(b\^2\)/
console.log(pattern.test('(b^2)*3'))

//(a+2b)/c

pattern_one=/\(a\+2b\)\/c/
console.log(pattern_one.test('(a+2b)/c'))

//We are students => We, are,students

var string ='We are students'
console.log(string.replace(/ /g,','))

//(5*7)+120 =>5*7+120
var character = '(5 * 7) + 120'
console.log(character.replace(/\(|\)/g,''))

//using special character to test
//09-xxxxxxxx
pattern=/^09\-\d{9}$/
console.log(pattern.test('09-429306291'))

//(+95)09-xxxxxxxx,(095)09-xxxxxxxxx
input=/^\(\+[1-9]{2}|095\)09\-\d{9}$/
console.log(input.test('(+85)09-234567891'))

console.log('quit'.match(/q([a-z])/))
console.log('quit'.match(/q[a-z]/))
console.log('quit'.match(/q(?:u)/))
console.log('quit'.match(/q(?=u)/))
console.log('quit'.match(/q(?!u)/))


//Exercise

//var email = /^(\d*.?[a-z]*.?)(\d*[a-z]*)+@[a-z]*-?[a-z]+(.[a-z]+)+$/
//var email =/^([0-9][a-z])+\_|\.([1-9][a-z])\@[a-z]\-[a-z](\.[a-z])+/
var email=/^([a-z]+.?|[0-9]+.?)*@[a-z]+(.[a-z]+)+$/
console.log(email.test('khaing@.com.mm.asia'))

/*dateformat=/[0-9]{2}\/[0-9]{2}\/([1-9]{2})?/
console.log(dateformat.test('07/22/2021'))

var visa =/^4(\d{12,15})$/
console.log(visa.test(4688520004417921))

var master=/^5([1-5])\d{14}$/
console.log(master.test(5152345678123414))*/



