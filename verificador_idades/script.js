function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        // Teste window.alert('Tudo OK!')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        // Teste res.innerHTML = `Idade calculada: ${idade} ano`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança_menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem_menino.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso_homem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'criança_menina.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem_menina.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'adulto_mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}