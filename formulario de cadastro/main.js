$(document).ready(function(){
    // Código executado quando o DOM estiver pronto
    $('form').on('submit',function(e){
        e.preventDefault()
    });
    $('.menu-hamburger').click(function(){
        $('nav').slideToggle();
    });

    $("#telefone").mask('(00)00000-0000');
    $("#CEP").mask('00.000-000');
    $("#CPF").mask('000.000.000-00');

    $('form').validate({
        rules:{
            nome:{
                required:true
            },
            email:{
                required:true,
                email:true
            },
            CPF:{
                required:true
            },
            telefone:{
                required:true
            },
            CEP:{
                required:true
            },
            Endereco:{
                required:true
            },
        },
        messages:{
            nome:'Por favor insira o seu nome' ,
            email:'Por favor insira um email válido' ,
            telefone:'Somente Número' ,
            CPF:'Somente Número' ,
            CEP:'Somente Número' ,
            Endereco:'Por favor insira o seu Endereço' ,
                      
        }
    });

    $('form').submit(function(event) {
        if (!$('form').valid()) {
            event.preventDefault(); // Impede a submissão do formulário se não for válido
        }else{
            
        }
    });

    $('button').click(function(){
       // $('form').submit(function(event) {
            if (!$('form').valid()) {
                //event.preventDefault(); // Impede a submissão do formulário se não for válido
            }else{
                    const destino = $('#cadastro');

                    // Coleta de dados dos campos do formulário
                    const nome = $('#nome').val();
                    const telefone = $('#telefone').val();
                    const email = $('#email').val();
                    const cpf = $('#CPF').val();
                    const cep = $('#CEP').val();
                    const endereco = $('#Endereco').val();

                    // Criação e adição da linha na tabela de registros
                    const novocadastro = $('<tr></tr>');
                    const dados = $(`
                        <td>${nome}</td> 
                        <td>${telefone}</td>
                        <td>${email}</td>
                        <td>${cpf}</td>
                        <td>${cep}</td>
                        <td>${endereco}</td>
                    `);
                    dados.appendTo(novocadastro);
                    novocadastro.appendTo('#dadostabela');

                    // Scroll suave para a seção de cadastro
                    $('html').animate({
                    scrollTop: destino.offset().top
                    }, 1000);
                    //limpa formulario se estiver tudo certo
                    $('#nome').val("")
                    $('#telefone').val("")
                    $('#email').val("")
                    $('#CPF').val("")
                    $('#CEP').val("")
                    $('#Endereco').val("")
                }
                });

                   

            
    });
            
        
        
        

