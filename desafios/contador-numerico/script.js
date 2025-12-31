function contador() {
    var valorInicial = document.querySelector("#valorinicial");
    var valorFinal = document.querySelector("#valorfinal");
    var razao = document.querySelector("#razao");
    var resposta = document.querySelector("#resposta");

    if(valorInicial.value.length == 0 || valorFinal.value.length == 0 || razao.value.length == 0) {
        alert("[ERRO] Porfavor, verifique os dados e tente novamente!");
    } else{
        resposta.innerHTML = "Contando: ";
        let valorIni = Number(valorInicial.value);
        let valorFin = Number(valorFinal.value);
        let raz = Number(razao.value);

        if (valorIni < valorFin) {
            for (let i = valorIni; i <= valorFin; i += raz) {
                resposta.innerHTML += `${i} > `;
                
            }
        } else {
            for (let i = valorIni; i >= valorFin; i -= raz) {
                resposta.innerHTML += `${i} > `;
            }
        }
        resposta.innerHTML += `\u{1F3C1}`;
    }
}

function apagar() {
    var valorInicial = document.querySelector("#valorinicial");
    var valorFinal = document.querySelector("#valorfinal");
    var razao = document.querySelector("#razao");
    var resposta = document.querySelector("#resposta");

    valorInicial += valorInicial.value = "";
    valorFinal += valorFinal.value = "";
    razao += razao.value = "";
    resposta.innerHTML = "";
}