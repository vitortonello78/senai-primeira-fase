// setInterval (()=>{
//     console.log("executei")
// },2000)

const prompt = require(`prompt-sync`)()

let contadorInicial = Number(prompt("Digite o número inicial"))
let contadorFinal = Number(prompt("Digite o número final"))

let intervalo = setInterval(()=>{
    contadorInicial++
    console.log(contadorInicial)
    if(contadorInicial === contadorFinal){
        clearInterval(intervalo)
    }
},1000)
