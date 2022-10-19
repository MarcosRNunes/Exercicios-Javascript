/*
function contar() {
        let ini = document.getElementById('txti')
        let fim = document.getElementById('txtf')
        let passo = document.getElementById('txtp')
        let res = document.getElementById('res')
        if (ini.value.length == 0 || fim.value.length ==0 || passo.value.length == 0) { 

            window.alert('Preencha todos os campos!')
            res.innerHTML = 'Impossível realizar a conta!'
        } else {

        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo inválido cusão! Vo mete dê 1 a 1')
            p = 1
        }
        if (i < f ) {
            //contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}` 
            }
        } else {
            // Contagem regressiva
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }    
}   


function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, dígite um número válido para calcular, caralho..!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c} `
            tab.appendChild(item)
            c++
        }
    }
} */

let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }

}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
    
}

function add() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let iten = document.createElement('option')
        iten.text = `valor ${num.value} adicionado`
        lista.appendChild(iten)
        res.innerHTML = ''
     } else {
            window.alert('Dígita essa porra certo!!!')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Coloca um valor aer maluco!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor adicionado foi o ${maior}</p>`
        res.innerHTML += `<p> O menor valor adicionado foi o ${menor}</p>`
        res.innerHTML += `<p> Todos os valores somam ${soma}</p>`
        res.innerHTML += `<p> A média dessa porra é ${media}</p>`
    }

}
