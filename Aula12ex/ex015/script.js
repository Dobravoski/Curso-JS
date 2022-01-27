function verificar() {
    var ano = new Date().getFullYear()
    var fAno = document.querySelector('input#txtano').value
    var fAno = Number(fAno)
    var res = document.querySelector('div#res')
    if (fAno.lenght == 0 || fAno > ano) {
        window.alert('[ERRO]. Verifique os dados e tente novamente.')
    } else {
        var sexo = document.getElementsByName('sexo')
        var idade = ano - fAno
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'img')
        if (sexo[0].checked) {
            genero = 'homem'
            if (idade < 5) {
                img.setAttribute('src', 'baby.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'garoto.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'homemAdulto.png')
            } else {
                img.setAttribute('src', 'homemIdoso.png')
            }
        } else {
            genero = 'mulher'
            if (idade < 5) {
                img.setAttribute('src', 'baby.png')
            } else if (idade < 18) {
                img.setAttribute('src', 'garota.png')
            } else if (idade < 65) {
                img.setAttribute('src', 'mulherAdulto.png')
            } else {
                img.setAttribute('src', 'mulherIdosa.png')
            }
        }
    res.style.textAlign = 'center'
    res.innerHTML = `detectamos ${genero} com ${idade} anos.`
    res.appendChild(img)
    }
}