var resultado

function dado() {
    var aleatorio = Math.random()
    var maximo = aleatorio * 2
    var exatas = Math.floor(maximo)
    resultado = exatas
}

function piada() {
    var numA
    dado()
    if (resultado === 0) {
        numA = 'Rafael: - Esta manhã acordei com o cachorro lambendo meu rosto.<br>Fabrício: - E o que há de mal nisso?<br>Rafael: - Nós não temos cachorro em casa...'
    }
    else if (resultado === 1) {
        numA = ''
    }

    var aqui = document.getElementById('aqui')
    aqui.innerHTML = numA
}

function charada() {
    var numB
    dado()
    if (resultado === 0) {
        numB = ''
    }
    else if (resultado === 1) {
        numB = 'Por que a galinha atravessou a estrada?<br>Resposta: Para chegar do outro lado.'
    }

    var aqui = document.getElementById('aqui')
    aqui.innerHTML = numB
}