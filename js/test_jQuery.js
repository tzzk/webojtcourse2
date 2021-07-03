$(document).ready(function(){
    console.log("Hello jQuery")
    console.log($("ul").html())
    console.log($("ul").text())
    console.log($('li').html())
    
    //get Element by tagname
    var myform=$('form');
    console.log(myform);
    console.log($('li').text())

    $('ul li').each(function (index) {
        console.log($(this).html());
    })
    console.log(document.getElementsByTagName('ul'))

    //Get element by Id
    console.log($('#main_heading'))
    var subheading=($('#sub_heading'))
    console.log(subheading)

    console.log($('#items'))
    console.log($('#one'))
    var items=document.getElementById('items')
    console.log(items)
    console.log(items[0])
    console.log($('.list-group'))
    console.log($('#two'))
    console.log($('#three'))
    console.log($('li'))

    console.log($('li.hot'))
    console.log($('.priority'))

    //css function
    //$('li').css('background-color','blue');
    //$('li').css('color','white')
   /* $('li').css({
        'background-color':'blue',
        'color':'white',
        'padding':'20'
    })*/

    $('#main-heading,#sub_heading').css({
        'background-color':'#c5a996',
        'color':'yellow',
        'border':'2px solid red',
    })
    /*$('#sub_heading').css({
        'background-color': '#c5a996',
        'color': 'Orange',
        'border': '2px solid red',
    })*/

   // $('ul li span').css('color','red')


    //Addclass (bootstrap)
    //$('li').addClass('bg-success')
    $('li').addClass('items')// adding class from Css
    $('li').removeClass('hot')// removing class from css
    $('li').removeClass('priority')
    

    //toggleClass adding

    $('li').click(function()
    {
        $(this).toggleClass('hot')
        $(this).toggleClass('priority');
        $(this).append('***');
        $(this).prepend('###');
    })

    $('ul').before('<h3>Food Items</h3>')
    $('ul').after('<spam>Please select what you want</spam>')
    
    //Add attribute
    $('ul').attr('class','bg-warning')
    $('ul').attr('id','food_item')
   // $('div').attr('id','name')
    $('input').attr('class','bg-warning')

    $('.mydiv').css({
        'background-color':'yellow',
        'border':'solid 2px red',
    })
  //hide
    $('.mydiv').click(function(){
     $(this).hide(1000);
    })
    //show
    $('#showme').click(function(){
        $('.mydiv').show(1000);
    })

    //toggle
    $('#toggleme').click(function(){
        $('.mydiv').toggle(1000);
    })

    //fadeIn fadeOut
    /*$('#fadein').click(function () {

        $('#div1').hide().fadeIn(1000);
        $('#div2').hide().fadeIn(1000)
    })
    $('#fadeout').click(function(){
        $('#div1,#div2').fadeOut(2000);
    })*/


    
     //$('.image1,.image2,.image3').hide().fadeIn(5000);
    //slideDown 
     $('#fadein').click(function(){
        $('#div1').hide().slideDown(2000);
        $('#div2').hide().slideDown(3000)
    })
    //slideUp
    $('#fadeout').click(function () {
        $('#div1,#div2').slideUp(2000);
    })

    //animation
    $('#img1,#img2,#img3').animate(
        {'opacity':0.3,'height':300,'left':'+=50'},
        5000,
        "swing",
        function()
        {
            $('#img1').attr('alt',"Pizza")
        }
    )
   
    
});



