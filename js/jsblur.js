// blur, focus events
var input = document.getElementById('item_name')
input.addEventListener('focus', function (e) {
    console.log("input name is focused")
    var message = document.getElementById('message')
    message.innerHTML = "please enter item name"
})
input.addEventListener('blur', function (e) {
    console.log("input name is not focused")
    if (input.value.length <= 0) {
        var message = document.getElementById("message")
        message.innerHTML = "You must enter item name"
    }
})
