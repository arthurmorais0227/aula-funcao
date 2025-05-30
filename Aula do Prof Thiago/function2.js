function cumprimentar(nome) {
    let resultado = `Olá ${nome}!!! Seja bem-vindo(a)! A hora é: ${horaAtual()}, do dia ${dataAtual()}!`;
    console.log(resultado);

    return resultado;
}

function horaAtual() {
    const agora = new Date();
    return agora.toLocaleTimeString();
}

function dataAtual() {
    const agora = new Date();
    return agora.toLocaleDateString();
}

cumprimentar('Arthur');
cumprimentar('Thiago');
cumprimentar('Daniel');