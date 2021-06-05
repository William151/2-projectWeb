

var funcBotao = function(){
    var numTabuada = window.document.getElementById('numTabuada')
    var select = window.document.getElementById("resultadoTabuada")

    
    
    if (numTabuada.value.length != '' ){
        var numUsuario = Number(numTabuada.value)
        select.innerText = ''
        for (var x = 0; x <= 10; x ++){
            //console.log(`${numUsuario}x${x}=${numUsuario*x}`)
            var optionValor = window.document.createElement('option')
            optionValor.text = `${numUsuario} x ${x} = ${numUsuario*x}`
            optionValor.value = `slect${x}`
            
            select.appendChild(optionValor)
        }

    

    }else{
        window.alert("Ei cara, tem algo errado ai. !!")
    }
}