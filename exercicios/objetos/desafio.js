const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const idade = document.querySelector("#idade");
const altura = document.querySelector("#altura");
const respostas = document.querySelector("#respostas");
const pessoas = [];

function enviar() {
    if (nome.value == "" || sobrenome.value == "" || idade.value == "" || altura.value == "") {
        alert("Por favor, preencha os dados!");
    } else {
        respostas.innerHTML = `${nome.value} ${sobrenome.value} ${idade.value} ${altura.value}`;
    } 
    
}

