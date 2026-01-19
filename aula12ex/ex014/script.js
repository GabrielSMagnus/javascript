
    var corpo = window.document.body
    var mensagem = document.querySelector('div#hora')
    var imagem = document.querySelector ('img#imagem')
    
    var hora = new Date()
    var agora = hora.getHours()
    /*hora.getHours()*/

    mensagem.innerHTML = `Agora são ${agora} horas.`

    if (agora >= 0 && agora < 6) {
        document.body.style.backgroundColor = '#16091D'
        imagem.src = 'imagens/noite.png'
    } else if (agora >= 6 && agora < 12) {
        document.body.style.backgroundColor = '#eccb91'
        imagem.src = 'imagens/manha.png'
    } else if (agora >= 12 && agora <18) {
        document.body.style.backgroundColor = '#D49F3C'
        imagem.src = 'imagens/tarde.png'
    } else if (agora >= 18 && agora < 24) {
        document.body.style.backgroundColor = '#16091D'
        imagem.src = 'imagens/noite.png'
    }

