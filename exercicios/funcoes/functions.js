function somar(a = 0,b = 0) {
    return a + b;
}
console.log(somar(2 , 6));

function ola(nome) {
    return `Olá, ${nome}!`;
}
console.log(ola("Andrey"));

function squareRoot(value) {
    return Math.sqrt(value);
}
console.log(squareRoot(129));

// ARROW FUNCTION
const bomdia = nome => `Bom dia ${nome}!`;
console.log(bomdia("Andrey"));
