const display = document.getElementById("display");

let primeiroNumero = "";
let segundoNumero = "";
let operador = "";
let aguardandoSegundoNumero = false;

// Botões numéricos e ponto
document.querySelectorAll(".btn[data-value]").forEach(botao => {
    botao.addEventListener("click", () => {
        const valor = botao.dataset.value;

        if (!aguardandoSegundoNumero) {
            primeiroNumero += valor;
            display.value = primeiroNumero;
        } else {
            segundoNumero += valor;
            display.value = segundoNumero;
        }
    });
});

// Operadores
document.getElementById("add").addEventListener("click", () => selecionarOperador("+"));
document.getElementById("sub").addEventListener("click", () => selecionarOperador("-"));
document.getElementById("mult").addEventListener("click", () => selecionarOperador("*"));
document.getElementById("div").addEventListener("click", () => selecionarOperador("/"));

function selecionarOperador(op) {
    if (primeiroNumero === "") return;

    operador = op;
    aguardandoSegundoNumero = true;
}

// Igual
document.getElementById("calcular").addEventListener("click", () => {
    if (primeiroNumero === "" || segundoNumero === "") return;

    const num1 = parseFloat(primeiroNumero);
    const num2 = parseFloat(segundoNumero);

    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num2 !== 0 ? num1 / num2 : "Erro";
            break;
        default:
            return;
    }

    display.value = resultado;

    primeiroNumero = resultado.toString();
    segundoNumero = "";
    operador = "";
    aguardandoSegundoNumero = false;
});

// Limpar
document.getElementById("limpar").addEventListener("click", () => {
    primeiroNumero = "";
    segundoNumero = "";
    operador = "";
    aguardandoSegundoNumero = false;
    display.value = "0";
});