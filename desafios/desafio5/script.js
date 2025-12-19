function gerarTabuada() {
    let num = document.querySelector("#num");
    let resultado = document.querySelector("#select");

    if (num.value.length == 0) {
        alert("[ERRO] preencha os dados!")
    } else {
        let n = Number(num.value);
        resultado.innerHTML = "";

        let menssagem = document.createElement("option");
        menssagem.text = `TABUÁDA DO ${n}:`;
        resultado.appendChild(menssagem);

        for (var i = 0; i <= 10; i++) {
            let item = document.createElement("option")
            item.text = `${n} X ${i} = ${n * i}`
            item.value = `tab${i}`;
            
            resultado.appendChild(item);
        }
    }
    
}