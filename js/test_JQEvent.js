$(function(){
    $('#additem').hide();
    $('#btnadd').click(function(){
        $('#additem').slideDown(2000)
    })

    var price=0;
    var qty=0;
    var cost=0;
    //calculation and express keyup or down or
    $('#qty').on('keyup',
    {'itemName':'humberger'},
    function(e){
        price=$('#price').val();//.val()= value
        qty=$('#qty').val();//get the value
        cost=price*qty;
        console.log(cost)
        //$('#cost').attr('value',cost)
        $('#cost').val(cost)//set or add the value into form
        console.log(e.type)
        console.log(e.data.itemName)
        e.preventDefault();
    })
    console.log($('#additem').children())
    console.log($('#btnadd').next())
    console.log($('li').eq(1))

    //calculation
   /* $('#qty').keyup(function () {
        price = $('#price').val();//.val()= value
        qty = $('#qty').val();//get the value
        cost = price * qty;
        console.log(cost)
        //$('#cost').attr('value',cost)
        $('#cost').val(cost)//set or add the value into form
        console.log(e.type)
        console.log(e.data.itemName)
        e.preventDefault();
    })*/

})

