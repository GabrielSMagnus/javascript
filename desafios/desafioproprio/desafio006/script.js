function verificar() {
    var numero = document.getElementById('inumero')
    var res = document.getElementById('resultado')

    if (numero.value.length === 0) {
        window.alert('Digite um número!')
        return
    }

    var n1 = Number(numero.value)

    if (n1 % 2 === 0) {
        res.innerHTML = (`O número ${n1} é PAR!`)
    } else {
        res.innerHTML = (`O número ${n1} é ÍMPAR!`)
    }
}