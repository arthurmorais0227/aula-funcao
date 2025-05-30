function inverteString(nome) {
    const name = nome.split('');
    let invercao = '';
for (let i = name.length - 1; i >= 0; i--) {
    invercao += name[i];
}

if (invercao.toLowerCase() === nome.toLowerCase()) {
    return true;
} else {
    return false;
}
}

console.log(inverteString("Arara"));