$(document).ready(function(){
    $('#carrossel-imagens').slick({
        autoplay:true,
    })
    $('.menu-hamburger').click(function(){
        $('nav').slideToggle()
    })
    $("#telefone").mask('(00)00000-0000')

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            telefone:{
                required:true
            },
            mensagem:{
                required:true
            },
            mensagem:{
                required:true
            },
            veiculoInteresse:{
                required:false
            },
        },
        messages:{
            nome:'Por favor insira o seu nome'                    
        },

        SubmitEvent: function(form) {
            //se ter certo
            console.log(form)

        },
        invalidHandler: function(evento,validador) {
            let camposIncorretos= validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Tem ${camposIncorretos} campos incorretos`)
            }
        }
       
    })

    $('.lista-veiculos button').click(function(){
        const destino= $('#contato');

        const nomeveiculos=$(this).parent().find('h3').text();
        $('#veiculoInteresse').val(nomeveiculos)

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
})