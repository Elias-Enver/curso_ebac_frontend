$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault()
        const tarefa = $('#input_tarefa').val()
        const novoitem= $(`<li class="li">"${tarefa}"</li>`)
        novoitem.appendTo('ul')

        
        $('.li').click(function(e){
            console.log(e.target)
            //$(e.target).toggle('.feito')
            $(this).addClass("feito")
        })
    })
   
})