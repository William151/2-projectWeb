
var func_range = function(de, para , em){
    var infoUsuario = window.document.getElementById('informacaoUsuario')
    infoUsuario.innerHTML = ``

    if(em > 0){
        for (var x = de; x <= para ; x += em){ // enquanto x é menor que para
            infoUsuario.innerHTML += `&#128073;${x} `
        }
    }
    else if(em < 0){ 
        var x = de
         while( x >= para){ // enquanto x é maior que para
            infoUsuario.innerHTML += `&#128073; ${x} `
             x -= Math.abs(em)
         }
    }else{
        window.alert('Zero ?')
    }
}

var func_Calcular = function(){
    var valorInicio = Number(window.document.getElementById('inputInicio').value)
    var valorFim= Number(window.document.getElementById('inputFim').value)
    var valorPasso = Number(window.document.getElementById('inputPasso').value)
    

    console.log(valorInicio, valorFim, valorPasso)
    func_range(valorInicio, valorFim, valorPasso)
}