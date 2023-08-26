$(document).ready(function(){

    $('form').on('submit',function(e){
        e.preventDefault()
        const tarefa = $('#input_tarefa').val()
        const novoitem= $(`<li class="li">"${tarefa}"</li>`)
        novoitem.appendTo('ul')

        
        $('ul').on('click', 'li', function() {
            $(this).toggleClass('feito');
          });
    })
   
})