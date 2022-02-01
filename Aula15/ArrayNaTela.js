let valores = [5, 8, 3, 0, 8, 4, 13]
valores.sort()

/*
for(pos = 0; pos < valores.length; pos++) {
    console.log(`O valor na posição ${pos} tem o valor ${valores[pos]}.`)
}
*/

for(let pos in valores) {
    console.log(`O valor na posição ${pos} tem o valor ${valores[pos]}.`)
}

console.log(valores)

let pos = valores.indexOf(13)
if (pos == -1) {
    console.log(`Infelizmente não achamos nenhum 13 na array.`)
} else {
    console.log(`O 13 está na posição ${pos}.`)
}