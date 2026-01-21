function calcular() { 
    var inicio = document.getElementById ('iinicio')
    var fim = document.getElementById ('ifim')
    var passo = document.getElementById ('ipasso')
    var res = document.getElementById ('res')

    res.innerHTML = ''
    
    if (inicio.value === '' || fim.value === '' || passo.value === '') {
        alert('Preencha todos os campos!')
        return
    }

    var inicio = Number(inicio.value)
    var fim = Number(fim.value)
    var passo = Number(passo.value)

    if (passo <= 0) {
        alert('Passo inválido')
        return
    }

    /*
    while (inicio <= fim) {
        res.innerHTML += `${inicio} 👉`
        inicio += passo
    }
    
    res.innerHTML += `🏁`*/
    if (inicio < fim) {
       for (var inicio; inicio <= fim; inicio += passo) {
        res.innerHTML += `${inicio} 👉 `}
    } else {
        while (fim <= inicio) {
            res.innerHTML += `${inicio} 👉 `
            inicio -= passo
        }
        
        res.innerHTML += `🏁` 
    }
    

}