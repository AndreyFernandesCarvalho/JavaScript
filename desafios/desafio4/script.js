function gerar() {

    let valorinicial = document.querySelector("#valorinicial");
    let valorfinal = document.querySelector("#valorfinal");
    let resultado = document.querySelector("#resultado");

    if (valorinicial.value == "" || valorfinal.value == "") {
        alert("[ERRO] Preencha os dados!");
        resultado.innerHTML = "- - - - - - -";
        return;
    } 

    valorinicial = Number(valorinicial.value);
    valorfinal = Number(valorfinal.value)

    if (valorinicial > valorfinal) {
        alert("O valor Min não pode ser maior que o valor Max!");
        resultado.innerHTML = "- - - - - - -";
        return;
    }

    const numeroAleatorio = Math.floor(Math.random() * (valorfinal - valorinicial + 1)) + valorinicial;;
    resultado.innerHTML = numeroAleatorio; 
}