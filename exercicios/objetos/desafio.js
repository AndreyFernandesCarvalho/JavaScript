const pessoas = [];

function enviar(event) {
    const nome = document.querySelector("#nome").value;
    const sobrenome = document.querySelector("#sobrenome").value;
    const idade = document.querySelector("#idade").value;
    const altura = document.querySelector("#altura").value;
    const respostas = document.querySelector("#respostas").value;

    if (nome.value == "" || sobrenome.value == "" || idade.value == "" || altura.value == "") {
        alert("Por favor, preencha os dados!");
    } else {
        
        const pessoa = {
            nome,
            sobrenome,
            idade,
            altura
        };

        pessoas.push(pessoa);
        console.log(pessoas);

    } 
}

