$(document).ready(function(){
   
    $('header button').click(function(){
        $(`form`).slideDown()
    }) 
    $('#btn_cancelar').click(function(){
        $('form').slideUp()
    })
    $('form').on('submit',function(e){
        e.preventDefault()
        const endereco = $('#endereco_imagem').val()
        const novoitem= $('<li style="display:none"></li>')
        $(`<img src="${endereco}" />`).appendTo(novoitem)
        $(`
        <div class="overlay" >
            <a href="${endereco}" target="_blank" title="ver imagem em tamanho real">
            ver Imagem em tamanho real
            </a>
         </div>
            `).appendTo(novoitem)
        
        $(novoitem).appendTo('ul')
        $(novoitem).fadeIn(1000)
        $('#endereco_imagem').val('')
    })
   
})