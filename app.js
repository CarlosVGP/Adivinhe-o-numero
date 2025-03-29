mensagemInicial()
let numeroGerado;
let numeroAleatorio = 1;
let tentativas = 0;
let textoTentativas;

function mensagemInicial(){
    alterarCampoDeTexto("h1", "Adivinhe o numero");
    alterarCampoDeTexto("p", "Escolha um numero entre 1 e 100");    
}

function verificarChute(){
    let resposta = document.querySelector('input').value
    tentativas++;
    tentativas > 1 ? textoTentativas = ("tentativas") : textoTentativas = ("tentativa");
    

    if (resposta != numeroAleatorio){
        if (resposta < numeroAleatorio){
            alterarCampoDeTexto("p", `O numero ${resposta} é menor que o numero que pensei`);
        }else{alterarCampoDeTexto("p", `O numero ${resposta} é maior que o numero que pensei`);
    }}else{
        alterarCampoDeTexto("p", `Parabéns, você acertou após ${tentativas} ${textoTentativas}`)
        document.getElementById("reiniciar").removeAttribute('disabled', false)
    }
}

function alterarCampoDeTexto(tag, frase){
    let campo = document.querySelector(tag);
    campo.innerHTML = frase;
    responsiveVoice.speak(frase, "Brazilian Portuguese Female", {rate:1.2})
}

function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    if(numeroEscolhido == numeroGerado){
        return gerarNumeroAleatorio();
    }else{
        numeroGerado = numeroEscolhido
        console.log(numeroEscolhido)
        return numeroEscolhido;
    }
}

function reiniciarJogo (){
    tentativas = 0;
    numeroAleatorio = gerarNumeroAleatorio();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute('disabled', true)
}