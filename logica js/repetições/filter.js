// const numeros = [3,5,8,10]

const numerosMaioresQueCinco = numeros.filter(valor => valor > 5)
console.log(numerosMaioresQueCinco)


const usuarios = [
    {nome: "João", idade: 32},
    {nome: "Maria", idade: 15},
    {nome: "pedro", idade: 21},
//     const valoresDobrados = numeros.map((valor) => valor * 2)
// console.log(numeros)
// console.log(valoresDobrados)
]

const nomesUsuarios = usuarios.map(usuario => usuario.nome)
console.log(nomesUsuarios)

const idadesUsuarios = usuarios.map(usuario => usuario.idade)
for(let idade of idadesUsuarios){
    console.log(idade)
}
