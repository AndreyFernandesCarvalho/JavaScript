function verificar() {
    var data = new Date();
    var anoAtual = data.getFullYear();

    var anoFormulario = document.querySelector("#ano");
    var resultado = document.querySelector("#resultado");

    if (anoFormulario.value.length == 0 || anoFormulario.value > anoAtual) {
        alert("[ERRO] Verifique os dados e tente novamente!");
    } else {
        var sexo = document.getElementsByName("radsex");
        var idade = anoAtual - anoFormulario.value;
        var gênero = "";
        
        var imagem = document.createElement("img");
        imagem.setAttribute("id", "imagem");

        if (sexo[0].checked) {
            gênero = "Homem";

            if (idade >= 0 && idade < 14) {
                imagem.setAttribute("src", "imagens/crianca-h.png");
            } else if (idade < 21 ) {
                imagem.setAttribute("src", "imagens/jovem-h.png");
            } else if (idade < 50) {
                imagem.setAttribute("src", "imagens/adulto-h.png");
            } else {
                imagem.setAttribute("src", "imagens/idoso-h.png");
            }
        } else if (sexo[1].checked){
            gênero = "Mulher";

            if (idade >= 0 && idade < 14) {
                imagem.setAttribute("src", "imagens/crianca-m.png");
            } else if (idade < 21 ) {
                imagem.setAttribute("src", "imagens/jovem-m.png");
            } else if (idade < 50) {
                imagem.setAttribute("src", "imagens/adulto-m.png");
            } else {
                imagem.setAttribute("src", "imagens/idoso-m.png");
            }
        }
        
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        resultado.appendChild(imagem);
        
    }
    
}