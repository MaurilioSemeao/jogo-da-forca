'use strict';
const palavras = [
    {nome: "EQUADOR", categoria:"LUGAR"},
    {nome: "BRASIL", categoria:"LUGAR"},
    {nome: "VENEZUELA", categoria:"LUGAR"},
    {nome: "BRASILIA", categoria:"LUGAR"},
    {nome: "CANADA", categoria:"LUGAR"},
    {nome: "PERU", categoria:"LUGAR"},
    {nome: "MEXICO", categoria:"LUGAR"},
    {nome: "TAJI MAHAL", categoria:"LUGAR"},
    {nome: "CANETA", categoria:"OBJETO"},
    {nome: "BIRRACHA", categoria:"OBJETO"},
    {nome: "CADERNO", categoria:"OBJETO"},
    {nome: "PRATO", categoria:"OBJETO"},
    {nome: "CONTROLE", categoria:"OBJETO"},
    {nome: "TELEVISAO", categoria:"OBJETO"},
    {nome: "COPO", categoria:"OBJETO"},
    {nome: "CELULAR", categoria:"OBJETO"},
    {nome: "POTE", categoria:"OBJETO"},
    {nome: "CAIXA", categoria:"OBJETO"},
    {nome: "ZEBRA", categoria:"ANIMAL"},
    {nome: "CAVALO", categoria:"ANIMAL"},
    {nome: "CAMELO", categoria:"ANIMAL"},
    {nome: "CAHORRO", categoria:"ANIMAL"},
    {nome: "GATO", categoria:"ANIMAL"},
    {nome: "VEADO", categoria:"ANIMAL"},
    {nome: "TATU", categoria:"ANIMAL"},
    {nome: "TARTARUGA", categoria:"ANIMAL"},
    {nome: "CORUJA", categoria:"ANIMAL"},
    {nome: "PAPAGAIO", categoria:"ANIMAL"},
    {nome: "MAÇÃ", categoria:"FRUTA"},
    {nome: "PERA", categoria:"FRUTA"},
    {nome: "UVA", categoria:"FRUTA"},
    {nome: "ABACAXI", categoria:"FRUTA"},
    {nome: "MAMAO", categoria:"FRUTA"},
    {nome: "ABACATI", categoria:"FRUTA"},
    {nome: "GOIABA", categoria:"FRUTA"},
    {nome: "GRAVIOLA", categoria:"FRUTA"},
    {nome: "CUPUAÇU", categoria:"FRUTA"},
    {nome: "JABOTICABA", categoria:"FRUTA"},
    {nome: "MANGA", categoria:"FRUTA"},
];
//variaveirs
let listaDinamica = [];
let palavraSecreta;
let palavraCategoria;
let tentativas = 6;
let contAcertos=0;

function sorteiaPalavra(arr){
    let indexRandom = (Math.round(Math.random() *arr.length));
     palavraSecreta = arr[indexRandom].nome;
     palavraCategoria = arr[indexRandom].categoria;
}

function mostrarNaTela(){
    const categoria = document.querySelector(".dicas");
    categoria.innerHTML = palavraCategoria;

    const palavraTela = document.querySelector(".palavra-secreta");
    palavraTela.innerHTML = ""; 
    for(let i = 0; i < palavraSecreta.length; i++) {
        const divTela = document.createElement("div");
        divTela.classList.add("letra");
        if(listaDinamica[i] == undefined){
            listaDinamica[i] = "&nbsp;"
        }
        divTela.innerHTML = listaDinamica[i];
        palavraTela.appendChild(divTela);
    }
}

function mudaImagenTela(tentativas){
    let imagem = document.querySelector(".imagem");
    imagem.style.backgroundImage = `url('./img/forca${tentativas}.png')`
}

function verificaLetra(letra){
    let verificaClass = letra.className;
    

    if(verificaClass != "botoes apertada" ){
        let verificadorIndex = palavraSecreta.indexOf(letra.innerHTML)
        if(verificadorIndex < 0){
                tentativas--;
        }else{
            for(let i=0; i<palavraSecreta.length; i++){
                if(palavraSecreta[i] == letra.innerHTML){
                    listaDinamica[i] = palavraSecreta[i];
                    contAcertos++;
                }
            }
        }  

    }
    if(contAcertos == palavraSecreta.length){
        verificafimDeJogo("Parabéns", "Você adivinhou a palavra secreta:");
    }
    if(tentativas >=0 ){
        mudaTecla(letra);
        mostrarNaTela();
        mudaImagenTela(tentativas);
    }
    if(tentativas == 0){
       verificafimDeJogo(palavraSecreta,"você Pedeu a Palavra secreta era: ");
       
    }

    

}

function fehcaJanela(){
    const mensagenFinal = document.querySelector(".mensagem-gameover");
    mensagenFinal.classList.remove("fim-de-jogo");
}

function resetaJogo(botao){
    tentativas = 6;
    contAcertos = 0;
    listaDinamica = [];
    botao.forEach((item)=>{
        item.classList.remove("apertada");
    });
   mudaImagenTela(tentativas);
   sorteiaPalavra(palavras);

}

function verificafimDeJogo(palavraSecreta,mensagem){
    const mensagenFinal = document.querySelector(".mensagem-gameover");
    const palavraTela = document.getElementById("palavra");
    const mensagemTela = document.getElementById("mensagem");

    mensagenFinal.classList.add("fim-de-jogo");
    palavraTela.innerHTML = palavraSecreta;
    mensagemTela.innerHTML = mensagem

}

function eventosEscutaBtn(){
    const teclas = document.querySelectorAll(".botoes");
    const btnFexarJanela = document.getElementById("fecha");
    const btnResetaJogo = document.getElementById("novo-jogo");

    btnFexarJanela.addEventListener('click',(e)=>{
        fehcaJanela();
    })

    teclas.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            verificaLetra(item)
            
        });
    })
    
    btnResetaJogo.addEventListener("click",(e)=>{
         e.preventDefault();
         resetaJogo(teclas);
         btnResetaJogo.classList.remove("apertada")
    });
}

function mudaTecla(tecla){
    tecla.classList.add("apertada");
}


function inicia(){
    sorteiaPalavra(palavras);
    eventosEscutaBtn();
    mostrarNaTela();

}

inicia()