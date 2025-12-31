let x = 10;
let y = 2;
let z = 5; 


z = Math.round(x); // Math.round(x) -> arredonda o valor para cima.
z = Math.floor(x); // Math.floor(x) -> arredonda o valor para baixo.

z = Math.ceil(x); // Math.ceil(x) -> arredonda o valor para cima independente do valor após a vírgula.

z = Math.pow(x, y); // Math.pow(x , y) -> calcula potênciação ( base, expoênte ).
z = Math.sqrt(x) // Math.sqrt(x) -> calcula a raíz quadrada.
z = Math.log(z); // Math.log(x) -> calcula o log.

z = Math.sin(x); // Math.sin(x) -> calcula o seno.
z = Math.cos(x); // Math.sin(x) -> calcula o cosseno.
z = Math.tan(x); // Math.sin(x) -> calcula a tangente.


z = Math.abs(x); // Math.abs(x) -> retorna o valor absoluto de um número (sempre o valor ficará positivo). ex: Math.abs(-10) saída: 10.
z = Math.sign(x); // Math.sign(x) -> retorna se o valor é positivo ou negativo. ex: Math.sign(10) saída: 1(positivo) / Math.sign(-10) saída: -1(negativo).


let max = Math.max(x, y, z); // Math.max(x , y , z ...) -> retorna qual o valor máximo.
let min = Math.min(x, y, z); // Math.min(x , y , z ...) -> retorna qual o valor mínimo.


const random = Math.floor(Math.random() * 100) + 1; // gera um valor aleatório dentro da faixa desejada.