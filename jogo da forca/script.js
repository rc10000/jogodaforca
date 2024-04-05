var palavras = ["cachorro", "gato", "elefante", "leão", "tigre", "girafa"];
var palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
var letrasEncontradas = new Array(palavraSelecionada.length).fill("_");
var letrasUtilizadas = [];
var tentativasRestantes = 6;

function atualizarTela() {
    document.getElementById("palavra").textContent = letrasEncontradas.join(" ");
    document.getElementById("tentativas-restantes").textContent = "Tentativas Restantes: " + tentativasRestantes;
    document.getElementById("letras-utilizadas").textContent = "Letras Utilizadas: " + letrasUtilizadas.join(", ");
}

function adivinhar() {
    var letra = document.getElementById("letra").value.toUpperCase();
    if (!letra || !/[A-Z]/.test(letra)) {
        alert("Por favor, digite uma letra válida.");
        return;
    }
    if (letrasUtilizadas.includes(letra)) {
        alert("Você já utilizou essa letra.");
        return;
    }

    letrasUtilizadas.push(letra);

    var acertou = false;
    for (var i = 0; i < palavraSelecionada.length; i++) {
        if (palavraSelecionada[i] === letra) {
            letrasEncontradas[i] = letra;
            acertou = true;
        }
    }

    if (!acertou) {
        tentativasRestantes--;
    }

    atualizarTela();

    if (letrasEncontradas.join("") === palavraSelecionada) {
        alert("Parabéns! Você venceu!");
        reiniciarJogo();
    } else if (tentativasRestantes === 0) {
        alert("Você perdeu! A palavra era: " + palavraSelecionada);
        reiniciarJogo();
    }
}

function reiniciarJogo() {
    palavraSelecionada = palavras[Math.floor(Math.random() * palavras.length)].toUpperCase();
    letrasEncontradas = new Array(palavraSelecionada.length).fill("_");
    letrasUtilizadas = [];
    tentativasRestantes = 6;
    atualizarTela();
}

atualizarTela();
