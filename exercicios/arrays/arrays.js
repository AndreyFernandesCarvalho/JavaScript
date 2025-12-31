const alunos = ["João", "Maria", "Matheus", "Henrique"];

alunos.unshift("Raianny");
alunos.push("Andrey");
alunos.sort();

for (let pos in alunos) {
    console.log(alunos[pos]);
}

console.log("-------------------");

const valores = [1, 4, 6, 2, 8, 5, 9, 0, 7];
valores.reverse();

for (let indice in valores) {
    console.log(valores[indice]);
}