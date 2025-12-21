let amigo = {
    nome: 'Andrey', 
    sexo: 'M', 
    idade: 18, 
    peso: 85.5, 

    engordar(n){
        this.peso += n;
    }
};

amigo.engordar(2);
console.log(amigo.peso);