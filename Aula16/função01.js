function parImpar(num) {
    if (num % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}

console.log(`Este número é ${parImpar(13)}!`)