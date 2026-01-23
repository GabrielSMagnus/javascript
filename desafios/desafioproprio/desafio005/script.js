function verificar() {
    var numero = document.getElementById ('inumero')
    var resultado = document.getElementById ('resultado')

    if (numero.value.length === 0) {
        window.alert('Digite um número!')
        return
    }

    var n1 = Number(numero.value)

    if (n1 > 0) {
        resultado.innerHTML = 'Este número é positivo!'
        resultado.style.color = 'green'
    } else if (n1 < 0) {
        resultado.innerHTML = 'Este número é negativo!'
        resultado.style.color = 'red'
    } else  {
        resultado.innerHTML = 'Este número é o zero!'
        resultado.style.color = 'blue'
    }
    
}