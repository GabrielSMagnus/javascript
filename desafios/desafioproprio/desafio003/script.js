function rodar() {
    var peso = document.getElementById('ipeso')
    var altura = document.getElementById('ialtura')
    var final = document.getElementById('texto')
    var n1 = Number(peso.value)
    var usado = Number(altura.value)
    var errada = usado/100
    var n2 = errada*errada
    var ultimo = document.getElementById('textooutro')

    var imc = n1/n2
    var imcFormatado = imc.toFixed(2)

    if (n1 < 1 || usado < 10) {
        window.alert('Revise os dados inseridos')
        return
    } 


    texto.innerHTML = `Seu IMC é de ${imcFormatado}.`
    


    if (imc < 18.5) {
        ultimo.innerHTML = `Você está na classificação de magreza.`
        return
    } else if (imc >= 18.5 && imc <= 24.9) {
        ultimo.innerHTML = `Você está na classificação normal.`
        return
    } else if (imc >= 25 && imc <= 29.9) {
        ultimo.innerHTML = `Você está na clasificação de sobrepeso.`
        return
    } else if (imc >=30.0 && imc <= 39.9){
        ultimo.innerHTML = `Você está na clasificação de obesidade.`
        return
    } else if (imc >= 40 ) {
        ultimo.innerHTML = `Você está na clasificação de obesidade grave.`
        return
    }
}