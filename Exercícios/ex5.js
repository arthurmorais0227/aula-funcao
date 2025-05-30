function fatorial(numero) {
    let fatorialize = numero;
    let resultado = fatorialize;

    for (let i = 1; i < fatorialize; i++) {
        resultado *= i;
    }
    
    return console.log(resultado);
}

fatorial(10);