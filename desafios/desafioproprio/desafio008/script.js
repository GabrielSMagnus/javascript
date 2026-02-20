function calcular() {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)

    const res = document.getElementById('res')

    if (nota1 > 10 || nota2 > 10 || nota3 > 10) {
        alert('A nota não pode ser maior que 10')
        return
    }
    const soma = nota1 + nota2 + nota3

    const resultado = soma / 3

    

    res.innerHTML = `A sua média é ${resultado.toFixed(2)}`
}