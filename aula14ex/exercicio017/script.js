function calcular() {
    var numero = Number(document.getElementById ('inumero').value)
    var c = 0
    var select = document.getElementById('ires')
    var res = ''
    
    select.innerHTML = '' /*Limpa o select*/
    
    while (c <= 10) {
        res = c * numero
        var option = document.createElement('option')
        option.text += `${numero} x ${c} = ${res}`
        select.appendChild(option)
        c++
    }
}