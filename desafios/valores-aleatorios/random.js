let btnGerar = document.querySelector("#gerar");
let btnReset = document.querySelector("#reset");
let valorMax = document.querySelector("#max");
let valorMin = document.querySelector("#min");
let valor = document.querySelector("#valor");

function gerar() {
    if (valorMax.value.length == 0 || valorMin.value.length == 0) {
        alert("Por favor, preencha os dados.");
    } else if (Number(valorMin.value) >= Number(valorMax.value)){
        alert("O valor MIN não pode ser MAIOR ou IGUAL ao valor MAX.");
    } else {
        let max = Number(valorMax.value);
        let min = Number(valorMin.value);

        let random = Math.floor (Math.random() * (max - min)) + min;
        valor.innerHTML = random;
    }
    
}

function reset() {
    valor.innerHTML = 0;
    valorMax.value = "";
    valorMin.value = "";
}
