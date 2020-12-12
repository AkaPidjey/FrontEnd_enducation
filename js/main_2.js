jQuery(document).ready(function(){
    $('h1').css({'color':'red'});
});


jQuery(function(){
    $('h1').css({'color':'red'});
});




    ////selectors

    // tag   <h1>
    $('h1').css({'color':'red'});

    // class   class="first"
    $('.first').css({'color':'red'});

    // id   id=second
    $('#second').css({'color':'red'});


    // data-id = 22
    var id1 = $('h2').data('id');
    alert(id);

    // data-name = Vasaj
    var id2 = $('h3').data('name');
    alert(id);


    ////the options of input

    // --1--
    alert(lastname);

    //--2--
    console.log('dsfasdf');
    console.log(lastname);

    ////   Atributes

    $('h2[title="test-world"]').css({'color':'red'});

    //// click(), dblclick, mouseenter, mouseleave, hover
    //// keypress, keydown, keyup
    //// change, submit, focus
    //--1--
    $('button1').click(function () {

    });
    //--2--
    $('button2').on(click,function (){

    });

    //// css, hide(), show(), delay(), animate(), fadeIn, fadeOut, attr()

    $('form1').css({'display':"none"});

    $('form2').hide() / $('form3').hide(1000)

    $('form4').show() / $('form5').hide(5000)

    //// resize, scroll

    $(window).resize(function (){
        // width(), height()
        var width = $(this).width();
    })

    ////   addClass, removeClass, toggleClass

    $('h4').addClass('red');

    ////   text(), html()

    var text = $('.text').text();
    console.log(text);

    ////   append, prepend

    $('ul').append('<li>dsfsd</li>');

    ////   remove(), empty(), after()

    $('ul2').empty();

    //// wrap, unwrap

