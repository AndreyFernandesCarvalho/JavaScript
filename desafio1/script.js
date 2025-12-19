function carregar(){
    var horas = document.querySelector(".horas");
    var imagem = document.querySelector("#imagem");

    var data = new Date();
    var horaAtual = data.getHours();
    horas.innerHTML = `Agora são ${horaAtual} horas`;

    if (horaAtual >= 6 && horaAtual < 12) {
        imagem.src = "imagens/imagem-manha-circular.png";
        document.body.style.backgroundImage = "linear-gradient(to bottom, #FFE991, #F4C667, #E7BA55)"
    } else if (horaAtual >= 12 && horaAtual < 18) {
        imagem.src = "imagens/imagem-tarde-circular.png";
        document.body.style.backgroundImage = "linear-gradient(to bottom, #CEAF91, #E5AE70, #D0874E)";
    }else {
        imagem.src = "imagens/imagem-noite-circular.png";
        document.body.style.backgroundImage = "linear-gradient(to bottom, #142C5C ,#2A426E, #3E4960 )";
    }
}

