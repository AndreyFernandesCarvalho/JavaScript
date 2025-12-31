const pessoa1 = {
    nome: "luíz", 
    sobrenome: "Miranda",
    idade: 18, 
    cidade: "Volta Redonda RJ",

    fala() {
        console.log(`A minha idade atual é ${this.idade} anos.`);
    },

    aumentarIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.aumentarIdade();
pessoa1.fala();

function pessoa(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade
    };
}
const person1 = pessoa("Andrey", "Fernandes" , 18);
const person2 = pessoa("Raianny" , "Benardo", 18);
