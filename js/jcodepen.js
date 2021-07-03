$(function(){
    
    $("#delete").on('click', function (e) {
        $("input").fadeOut(500, function () {
            $(this).remove();
        });
    });
    $('#add').on('click',function(e){
        $('#next').append($("input[type='text']"));
        console.log('hello')
    })
})