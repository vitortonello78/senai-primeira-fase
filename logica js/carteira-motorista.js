const prompt = require ("prompt-sync")()

const usuario= (prompt("Digite o usuario: "))
const senha = (prompt("digite a senha: "))

if(usuario === "admin" && senha == "12345"){
    console.log("acesso autorizado")
}else{
    console.log("acesso Negado")
}