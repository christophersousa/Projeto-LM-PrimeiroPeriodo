$(function(){
    $('section#descrição article div.btn').click(function(){
        $(this).siblings('div.box').slideToggle();
        if($(this).text() == '» Mostrar especificações'){
            $(this).text('» Ocultar especificações');
        }else{
            $(this).text('» Mostrar especificações')
        }
    })
})