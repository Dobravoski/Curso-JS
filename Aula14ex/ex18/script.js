function contar() {
    var inicio = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    var res = document.querySelector('div#res')
    for(c = inicio; c <= fim; passo) {
        res.innerHTML += c
    }
}