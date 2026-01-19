function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('iidade')
    var sexo = document.getElementsByName ('sexo')
    var res = document.getElementById('res')
    var imagem = document.getElementById('imagem')
    var texto = document.getElementById('texto')

    if (fano.value.length <= 3 || Number(fano.value) > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente!')
        return
    } 

    var idade = ano - Number(fano.value)
    var genero = ''

    if (sexo[0].checked) {
            genero = 'homem'
        } else {
            genero = 'mulher'
    }
    
    texto.innerHTML = `Detectamos ${genero} de ${idade} anos.`

    if (genero == 'homem') {
        if (idade <=12) {
            imagem.src = 'imagenspessoas/menino.png'
            imagem.style.display = 'block'
        } else if (idade > 12 && idade <= 18) {
            imagem.src= 'imagenspessoas/jovemh.png' 
            imagem.style.display = 'block'  
        } else if (idade > 18 && idade <= 60) {
            imagem.src= 'imagenspessoas/adulto.png'
            imagem.style.display = 'block'            
        } else {
            imagem.src = 'imagenspessoas/velho.png'
            imagem.style.display = 'block'
        }
    } else {
        if (idade <= 12) {
            imagem.src = 'imagenspessoas/menina.png'
            imagem.style.display = 'block'
        } else if (idade > 12 && idade <= 18) {
            imagem.src= 'imagenspessoas/jovemm.png'  
            imagem.style.display = 'block' 
        } else if (idade > 18 && idade <= 60) {
            imagem.src= 'imagenspessoas/adulta.png'  
            imagem.style.display = 'block'          
        } else {
            imagem.src = 'imagenspessoas/velha.png'
            imagem.style.display = 'block'
        }
    }
}


