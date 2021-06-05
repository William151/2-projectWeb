
var arrayMaster = []
var  resultado = window.document.getElementById('resu')
function clickButtonAdd(){
    let objectInputNumber = window.document.getElementById("numeroUsuario")
    let objectSelect = window.document.getElementById('listaSelect')
    let valueUser = objectInputNumber.value
    
    console.log(objectInputNumber.value)

    //validate entrance user
    if (valueUser == ''){
        window.alert("Digite algo.")

    } else {
        
        let numberUser = Number(valueUser) // covert to value user for type number
        if (arrayMaster.indexOf(numberUser) > -1){ // if the number is in the list
            window.alert(`O valor ${valueUser} já foi adicionado à lista.`)
        }else if (numberUser < 1 || numberUser > 100){
            window.alert("Digite um valor entre 1 e 100.")
        } else {
            resultado.innerHTML = ''
            arrayMaster.push(numberUser ) // add the number user to the list
            let elementOption = window.document.createElement('option')
            elementOption.text = `Valor ${numberUser} adicionado.
            `
            elementOption.value = `option${numberUser}`
            objectSelect.appendChild(elementOption)
        }


    }

}

function addItems(array){ // add all number from the array
    let assi = 0
    for(let index in array){
        assi += array[index]
    }
    return assi
}

function averageArray(array){
    return (addItems(array) / array.length).toFixed(2)
}

function clickButtonFinish(){
    if(arrayMaster.length == 0){
        window.alert('Adicione um número à lista.')
    } else{
        arrayMaster.sort() // organize the array in order growgin
        let amountNumbers = arrayMaster.length // the amount elements in the array
        let  biggerNumber = Math.max.apply(null,arrayMaster)//bigger number in the array organized
        let smallerNumber = Math.min.apply(null, arrayMaster)// smaller number in the array organized
        let valuesCalculed = addItems(arrayMaster) // all values calculed
        let averageValue = averageArray(arrayMaster)

        console.log('tamanho '   + amountNumbers)
        console.log('maior valor '+ biggerNumber)
        console.log('menor valor '+ smallerNumber)
        console.log('todos os valores somados '+ valuesCalculed)
        console.log('media valores '+ averageValue)
        
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>O tamanho da lista é ${amountNumbers}.</p>` 
        resultado.innerHTML += `<p>O maior valor da lista é ${biggerNumber}.</p>`
        resultado.innerHTML += `<p>O menor valor da lista é ${smallerNumber}.</p>`
        resultado.innerHTML += `<p>A soma de todos os valores da lista é ${valuesCalculed}.</p>`
        resultado.innerHTML += `<p>A média dos valores da lista é ${averageValue}.</p>`

    }
}