function submitForm() {
    var input = document.getElementById('firstname')
    input.addEventListener('focus', function (e) {
        console.log('input name is focused')
        var message = document.getElementById('message')
        message.innerHTML = "Enter first and Last name"

    })
    input.addEventListener('blur', function (e) {
        console.log('input name is not focused')
        if (input.value.length <= 0) {
            message.innerHTML = "Enter first and Last name"
        }
    })

    var add = document.getElementById('username')
    add.addEventListener('focus', function (e) {
        console.log('input name is focused')
        var messages = document.getElementById('messages')
        messages.innerHTML = "Choose a Gmail address"

    })
    add.addEventListener('blur', function (e) {
        console.log('input name is not focused')
        if (add.value.length <= 0) {
            messages.innerHTML = "Choose a Gmail address"
        }
    })
    var pass = document.getElementById('password')
    pass.addEventListener('focus', function (e) {
        console.log('input name is focused')
        var pa = document.getElementById('pa')
        pa.innerHTML = "Enter a Password"

    })
    pass.addEventListener('blur', function (e) {
        console.log('input name is not focused')
        if (pass.value.length <= 0) {
            pa.innerHTML = "Confirm Password"
        }
    })
}




