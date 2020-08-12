const nome = 'Leonardo';
const sobreNome = 'Bastos'
const idade = 37
const peso = 70
const altura = 1.70

let imc = peso / (altura * altura)
let anoNascimento = 2020 - idade
console.log(anoNascimento)

console.log(imc)


console.log('O nome do cliente é:', nome, sobreNome, 'Tem', idade, 
'nascido em',anoNascimento,',possui o imc igual a:',imc);

console.log(`tem ${altura}m de altura e seu peso é ${peso} kg`);