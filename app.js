function insert(num) {
    var numero = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML = numero + num
}

function clean() {
    document.getElementById('resultado').innerHTML = ''
}

function back() {
    var tirar = document.getElementById('resultado').innerHTML 
    document.getElementById('resultado').innerHTML = tirar.substring(0, tirar.length -1)
}

function calcular() {
    var produto = document.getElementById('resultado').innerHTML
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(produto)
    }
}