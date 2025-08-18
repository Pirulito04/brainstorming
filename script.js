const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "qual jogador mais famoso?",
        alternativas: [
            {
                texto: "cristiano ronaldo",
                afirmacao: "O futebol, como o conhecemos hoje, teve origem na Inglaterra durante o século XIX. A criação da Football Association (FA) em 1863 marcou um ponto de virada, unificando as regras e estabelecendo as bases para o futebol moderno."
            },
            {
                texto: "messi",
                afirmacao: "Antes disso, jogos semelhantes já existiam, como o calcio fiorentino na Itália e o tsu-chu na China, mas a FA foi fundamental para padronizar o esporte."
                
            }
        ]
    },
    {
        enunciado: "voce gosta de futebol?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: ""
            },
            {
                texto: "não",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "em que ano o brasil ganhou a copa ?",
        alternativas: [
            {
                texto: "2025.",
                afirmacao: ""
            },
            {
                texto: "2002.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "que time voce torce?",
        alternativas: [
            {
                texto: "flamengo.",
                afirmacao: ""
            },
            {
                texto: "são paulo",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "qual o  time mais famoso do mundo ? ",
        alternativas: [
            {
                texto: "real madrid",
                afirmacao: "I"
            },
            {
                texto: "vidigal.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "futebol";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();