
var operação = "**";

function calculos(n1,n2) {
    if (operação == "+") {
        return n1 + n2;
    } else if (operação == "-") {
        return n1 - n2;
    } else if (operação == "*") {
        return n1 * n2;
    } else if (operação == "/") {
        return n1 / n2;
    } else if (operação == "**")  {
        return n1 ** n2;
    } else {
        console.log("[ERRO] Operação inválida!");
    }
}

console.log(calculos(10, 2));