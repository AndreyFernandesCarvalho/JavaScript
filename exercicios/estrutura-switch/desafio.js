    let content = document.querySelector("#content");

    function diaDaSemana(valor) {
        switch (valor) {
            case 0: return "Domingo";
            case 1: return "Segunda-Feira";
            case 2: return "Terça-Feira";
            case 3: return "Quarta-Feira";
            case 4: return "Quinta-Feira";
            case 5: return "Sexta-Feira";
            case 6: return "Sábado";
        }   
    }

    function mes(valor) {
        switch (valor) {
            case 0: return "Janeiro";
            case 1: return "Fevereiro";
            case 2: return "Março";
            case 3: return "Abril";
            case 4: return "Maio";
            case 5: return "Junho";
            case 6: return "Julho";
            case 7: return "Agosto";
            case 8: return "Setembro";
            case 9: return "Outubro";
            case 10: return "Novembro";
            case 11: return "Dezembro";
        }
    }

    function zero(num) {
        return num >= 10 ? num : `0${num}`;
    }

    function data() {
        const dataAtual = new Date();

        const nomeSemana = diaDaSemana(dataAtual.getDay());
        const dia = dataAtual.getDate();
        const nomeMes = mes(dataAtual.getMonth());
        const ano = dataAtual.getFullYear();
        const horas = zero(dataAtual.getHours());
        const minutos = zero(dataAtual.getMinutes());

        content.innerHTML = `${nomeSemana}, ${dia} de ${nomeMes} de ${ano} ${horas}:${minutos}`;
    }