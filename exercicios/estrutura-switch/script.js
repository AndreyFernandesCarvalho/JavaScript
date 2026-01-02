const data = new Date();
const diaDaSemana = data.getDay();
let texto;

switch (diaDaSemana) {

    case 0:
        texto = "Domingo";
        break;
    case 1:
        texto = "Segunda-Feira";
        break;
    case 2:
        texto = "Terça-Feira";
        break;     
    case 3:
        texto = "Quarta-Feira";
        break;
    case 4:
        texto = "Quinta-Feira";
        break;
    case 5:
        texto = "Sexta-Feira";
        break;
    case 6:
        texto = "Sábado";
        break;
    default:
        texto = "Dia inválido!";
        break;   

}

console.log(texto);

