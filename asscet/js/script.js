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

function verificarTeclas(){
    const teclas = document.querySelectorAll(".botoes");
    teclas.forEach((item)=>{
        item.addEventListener("click",(e)=>{
            e.preventDefault();
            console.log('clikei')
            verificaLetra(item)
        });
    })
}

function verificaLetra(letra){
   console.log(palavraSecreta.indexOf(letra.innerHTML))
   
    mudaTecla(letra);
}

function mudaTecla(tecla){
    tecla.classList.add("apertada");
}



function inicia(){
    sorteiaPalavra(palavras);
    mostrarNaTela();
    verificarTeclas();
}

inicia()