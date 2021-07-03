
$(function(){
    $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#add, #subtract, #multiply, #divide, #power, #dot, #para1, #para2').click(function () {
        var v = $(this).val();
        var total = $('.input').val($('.input').val() + v);
    });
    $('#equal').click(function(){
        $('.input').val(eval($('.input').val()));
    })
    $('#clear').click(function(){
        $('.input').val(' ');
    })
    
    $('#backspace').click(function(){
        
        $('.input').val($('.input').val().substring(0, $('.input').val().length - 1));
    
    })
    

})