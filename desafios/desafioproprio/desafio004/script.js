var mais = document.getElementById('mais')
var menos = document.getElementById('menos')
var valor = document.getElementById('valor')
var limpar = document.getElementById('limpar')
var contador = 0


mais.onclick = function() {
    contador++
    valor.innerHTML = contador
}
menos.onclick = function() {
    if (contador > 0) {
        contador --
        valor.innerHTML = contador
    }
}

limpar.onclick = function() {
    contador = 0
    valor.innerHTML = contador
}