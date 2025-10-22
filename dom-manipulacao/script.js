function efetuarLogin(){
    let resultado = document.getElementById("resultadoLogin")
    console.log(resultado);
    let user = document.getElementById("username").value
    if(user == "Vitor"){
        resultado.innerHTML = "Login com sucesso"
        alert("Login com sucesso")
    } else {
        alert("credenciais incorretas")
    }
}






function mostrarMensagem(){
    alert("mensagem")
    alert("resto da mensagem")
}

function executarExercicio(){
    // let nome = prompt("Digite seu nome?")
    // alert("Olá " + nome)
    let nome = document.getElementById("entrada").value
    document.getElementById("resultado").innerHTML = "Olá " + nome + ", seja bem vindo!"
}
