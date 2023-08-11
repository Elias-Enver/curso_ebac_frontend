const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
const btnValidar = document.getElementById('btnValidar')
//const form = document.getElementById('form')
const mensagemTela = document.getElementById('mensagem')


function ValidarValor(n1,n2){ 
    if(n1>n2){
       
        mensagemTela.innerHTML=`Correto o Numero: <b>${n1}</b> é Maior que o Numero: <b>${n2}</b>`
      
        mensagemTela.classList.remove('numberNOk')
        mensagemTela.classList.add('numberOk')
       
    }else if(n2>=n1){
       
        mensagemTela.innerHTML=`Incorreto o Numero: <b>${n1}</b> é Menor ou igual ao Numero: <b>${n2}</b>`
        
        mensagemTela.classList.remove('numberOk')
        mensagemTela.classList.add('numberNOk')
    }    

}  ;


   
    btnValidar.addEventListener('click',()=>{
        mensagemTela.innerHTML=""
       
        ValidarValor(number1.value,number2.value)
        number1.value=""
        number2.value=""
      
      

    })  

