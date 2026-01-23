function verificar() {
    var number1 = document.getElementById('in1')
    var number2 = document.getElementById('in2')
    var res = document.getElementById('res')
    
    if (number1.value.length === 0 || number2.value.length === 0 ) {
        window.alert('Preencha corretamente os dois números!')
        return
    }

    var n1 = Number(number1.value)
    var n2 = Number(number2.value)


    if (n1 == n2) {
        res.innerHTML = `Os números são iguais!`
        return
    }

    if (n1 > n2) {
        res.innerHTML = ` O número ${n1} é maior que o número ${n2}!`
    } else  {
        res.innerHTML = `O número ${n2} é maior que o número ${n1}!`
    }

}
