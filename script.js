var piadas = [
    `Rafael: - Esta manhã acordei com o cachorro lambendo meu rosto.<br>
    Fabrício: - E o que há de mal nisso?<br>
    Rafael: - Nós não temos cachorro em casa...`,

    `Professora: Doca, o que você sabe sobre Tiradentes?<br>
    Doca: Tiradentes foi um homem que morreu enforcado.<br>
    Professora: Mas... Só isso?<br>
    Doca: Puxa vida, ele foi enforcado e a senhor ainda acha pouco?`,
]

var charadas = [
    'Por que a galinha atravessou a estrada?<br>Resposta: Para chegar do outro lado.',
    'Por que o gato mia para a lua e ela não responde?<br>Resposta: Porque astro-no-mia',
    'Qual é o desejo da cobra?<br>Resposta: Ser pente',
    'Quem é o pai das aves?<br>Resposta: O PAIpagaio',
]

function dado(maximo) {
    var aleatorio = Math.random()
    var maximo = aleatorio * maximo
    var exatas = Math.floor(maximo)
    resultado = exatas
    return resultado
}

function piada() {
    var dado1 = dado(piadas.length)
    var piada = piadas[dado1]
    var aqui = document.getElementById('aqui')
    aqui.innerHTML = piada
}

function charada() {
    var dado2 = dado(charadas.length)
    var charada = charadas[dado2]
    var aqui = document.getElementById('aqui')
    aqui.innerHTML = charada
}