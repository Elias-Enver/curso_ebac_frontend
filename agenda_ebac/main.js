const form = document.getElementById('form_contatos')
let linha;
const Nome = []
const Telefone = []
const corpotabela = document.querySelector('tbody')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    adicionalinha()
  
})

function adicionalinha(){
    const nome_contato = document.getElementById('nome_contato')
    const telefone_contato = document.getElementById('telefone_contato')
    

    if(Nome.includes(nome_contato.value.toUpperCase())){
        alert(`O Contato:${nome_contato.value.toUpperCase()} já está na agenda`)
       
    }else{
        Nome.push(nome_contato.value.toUpperCase())
        Telefone.push(telefone_contato.value)
        linha = '<tr>'
        linha += `<td>${nome_contato.value.toUpperCase()} </td>`
        linha += `<td>${telefone_contato.value} </td>`
        linha += `</tr>`
        corpotabela.innerHTML += linha
    }



    nome_contato.value = ""
    telefone_contato.value=""

}

