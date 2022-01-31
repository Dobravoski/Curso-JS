function tabuada() {
    let num = (document.getElementById('txtn')).value
    let tab = document.getElementById('seltab')
    if (num.length == 0) {
        window.alert('Por favor digite um número...')
    } else {
        num = Number(num)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont}  = ${num*cont}`
            tab.appendChild(item)
            cont++
        }
    }
}