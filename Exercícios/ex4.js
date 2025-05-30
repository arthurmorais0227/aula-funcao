function inverteString(nome) {
    const name = nome.split('');
    let invercao = '';
for (let i = name.length - 1; i >= 0; i--) {
    invercao += name[i];
}
return invercao;
}

console.log(inverteString('thiago'));
console.log(inverteString('Java Script'));
