let num = document.querySelector("#num");
let contador = 0;

function acrescentar() {
    contador++;
    num.innerHTML = contador;
}

function decrementar() {
    contador--;
    num.innerHTML = contador;
}

function reset() {
    contador = 0;
    num.innerHTML = contador;
}