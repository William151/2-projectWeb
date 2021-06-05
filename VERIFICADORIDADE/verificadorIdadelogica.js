
var agora = new Date();
var ano = agora.getFullYear()

var mudarEstado =  function(imagem, sexoP, idade){
    var imagemPessoa  = window.document.getElementById('imgPessoa')

    textoUsuario.innerHTML = `Você é um(a) ${sexoP} de ${idade} anos `
    imagemPessoa.src = `img/${imagem}.jpg`
    console.log(imagemPessoa)

}
 var chamadaPeloBotao = function(){
     // pegar valor dos elementos
    var  anoNascimento = window.document.getElementById('entradaAno') // ano de nascimento

    var sexoPessoa = window.document.getElementsByName('confirmRadio') // pegar o sexo da pessoa, devolve uma lista


    var  textoUsuario = window.document.getElementById('textoUsuario') // texto principal para o usuario

    
    var idade = (ano - Number(anoNascimento.value))
    if (idade >= 1 && idade <= 12){
        if (sexoPessoa[0].checked){ // se for homem
            mudarEstado('criançaMasculino', 'homem', idade)

        }else{
            mudarEstado('criançaFeminino', 'mulher', idade)
        }
    }else if(idade >=13 && idade <18){
       if (sexoPessoa[0].checked){
           mudarEstado('adolescenteMasculino', 'homem', idade)
       }else{
           mudarEstado('adolescenteFeminino', 'mulher', idade)
       }
    }else if(idade >= 18 && idade < 60){
        if(sexoPessoa[0].checked){
            mudarEstado('adultoHomem', 'homem', idade)
        }else{
            mudarEstado('adultoFeminino', 'mulher', idade)
        }
    }else if(idade >= 60 && idade <= 120){
        if(sexoPessoa[0].checked){
            mudarEstado('idoso', 'homem', idade)
        }else{
            mudarEstado('idosa', 'mulher',idade)
        }
    }else{
        textoUsuario.innerHTML = 'algo está errado.'
    }
 }