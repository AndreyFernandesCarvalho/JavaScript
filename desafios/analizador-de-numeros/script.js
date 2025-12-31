let dadosSelect = [];

let valor = document.querySelector("#num");
let select = document.querySelector("#select");
let respostas = document.querySelector("#respostas");

function adicionar() {
    if (valor.value.length == 0) {
        alert("[ERRO] Porfavor, digite o valor!")
    } else if (valor.value < 1 || valor.value > 100) {
        alert("[ERRO] Porfavor, digite o valor na faixa imposta. (entre 1 e 100)");
    } else {
        let num = Number(valor.value);

        if (dadosSelect.indexOf(num) != -1) {
            alert("Valor já adicionado!");
             
        } else {    
            dadosSelect.push(num);

            let item = document.createElement("option");
            item.text = `Valor ${num} adicionado`;
            select.appendChild(item);
        }
    }
    valor.value = "";
    valor.focus();

    respostas.innerHTML = "";
}

function finalizar() {
    if (dadosSelect.length == 0) {
        alert("[ERRO] Para finalizar é necessário que você adicione dados.");
    } else {
    let maior = dadosSelect[0];
        let menor = dadosSelect[0];

        for (let i = 0; i < dadosSelect.length; i++) {
            if (dadosSelect[i] > maior) {
                maior = dadosSelect[i];
            }

            if (dadosSelect[i] < menor) {
                menor = dadosSelect[i];
            }
        }

        let armazenamento = 0;
        for (let c = 0; c < dadosSelect.length; c++) {
            armazenamento += dadosSelect[c];
        }

        respostas.innerHTML = `<p>Ao todo, temos ${dadosSelect.length} elementos adicionados.</p>`

        respostas.innerHTML += `<p>O maior número digitado foi ${maior}.</p>`;
        respostas.innerHTML += `<p>O menor número digitado foi ${menor}.</p>`;

        respostas.innerHTML += `<p>Somando todos os valores, temos ${armazenamento}.</p>`
        respostas.innerHTML += `<p>A média dos valores digitados é ${armazenamento / dadosSelect.length}</p>`;
    } 
}