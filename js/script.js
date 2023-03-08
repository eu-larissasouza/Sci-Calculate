var output = document.querySelector('#output')
var btn = document.querySelectorAll('.btn')

/*============ Loop for: Obtém o valor de btn ============*/

for (item of btn) {
    item.addEventListener('click', e => {
        btntext = e.target.innerText

        if (btntext == '×') {
            btntext = '*'
        }

        if (btntext == '÷') {
            btntext = '/'
        }

        output.value += btntext
    })
}

function allclear() {
    output.value = ''
}

function backspc() {
    output.value = output.value.substr(0, output.value.length - 1)
}

function compute() {
    output.value = eval(output.value)
}

function sin() {
    output.value = Math.sin(eval(output.value))
}

function cos() {
    output.value = Math.cos(eval(output.value))
}

function tan() {
    output.value = Math.tan(eval(output.value))
}

function pow() {
    output.value = Math.pow(eval(output.value), 2)
}

function sqrt() {
    output.value = Math.sqrt(eval(output.value), 2)
}

function log() {
    output.value = Math.log(eval(output.value))
}

function pi() {
    output.value += 3.14159265359
}

function e() {
    output.value += 2.71828182846
}

function fact() {
    var i, num, f
    f = 1
    num = eval(output.value)
    for (i = 1; i <= num; i++) {
        f = f * i
    }

    i = i - 1

    output.value = f
}

function roundNumber() {
    output.value =
        output.value.length >= 10 ? Math.round(output.value, 8) : output.value
}