
const canvas = document.getElementById("journalCanvas");
const ctx = canvas.getContext("2d");

const elementos = [];

let elementoSelecionado = null;

let arrastando = false;

let offsetX = 0;
let offsetY = 0;

function desenharCanvas() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    ctx.fillStyle = "#fefefe";

    ctx.fillRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    elementos.forEach((elemento) => {

        if (elemento.tipo === "texto") {
            desenharTexto(elemento);
        }

        if (elemento.tipo === "imagem") {
            desenharImagem(elemento);
        }

    });


    if (elementoSelecionado !== null) {
        desenharSelecao(elementoSelecionado);
    }
}

function desenharTexto(elemento) {

    ctx.save();

    ctx.fillStyle = "#303034";

    ctx.font = "24px Courier New";

    ctx.textBaseline = "top";

    ctx.fillText(
        elemento.texto,
        elemento.x,
        elemento.y
    );

    ctx.restore();
}

function desenharImagem(elemento) {

    if (!elemento.imagem.complete) {
        return;
    }

    ctx.drawImage(
        elemento.imagem,
        elemento.x,
        elemento.y,
        elemento.largura,
        elemento.altura
    );
}

function desenharSelecao(elemento) {

    ctx.save();

    ctx.strokeStyle = "#303034";
    ctx.lineWidth = 2;

    if (elemento.tipo === "texto") {

        ctx.font = "24px Courier New";

        const larguraTexto =
            ctx.measureText(elemento.texto).width;

        ctx.strokeRect(
            elemento.x - 5,
            elemento.y - 5,
            larguraTexto + 10,
            35
        );
    }

    if (elemento.tipo === "imagem") {

        ctx.strokeRect(
            elemento.x - 5,
            elemento.y - 5,
            elemento.largura + 10,
            elemento.altura + 10
        );
    }

    ctx.restore();
}

const botaoAdicionarTexto =
    document.getElementById("addText");


botaoAdicionarTexto.addEventListener("click", () => {

    const texto = prompt(
        "Digite o texto da sua página:"
    );

    if (!texto || texto.trim() === "") {
        return;
    }


    const novoElemento = {

        tipo: "texto",

        x: 100,

        y: 100,

        texto: texto.trim()
    };


    elementos.push(novoElemento);

    elementoSelecionado = novoElemento;

    desenharCanvas();
});

const botoesImagem =
    document.querySelectorAll(".image-option");


botoesImagem.forEach((botao) => {

    botao.addEventListener("click", () => {

        const imagemOriginal =
            botao.querySelector("img");


        const imagem = new Image();

        imagem.src = imagemOriginal.src;


        imagem.onload = () => {

            const largura = 100;

            const proporcao =
                imagem.height / imagem.width;

            const altura =
                largura * proporcao;


            const novoElemento = {

                tipo: "imagem",

                x: 100,

                y: 100,

                largura: largura,

                altura: altura,

                imagem: imagem
            };


            elementos.push(novoElemento);

            elementoSelecionado = novoElemento;

            desenharCanvas();
        };

    });

});


function obterPosicaoMouse(evento) {

    const rect =
        canvas.getBoundingClientRect();

    const escalaX =
        canvas.width / rect.width;

    const escalaY =
        canvas.height / rect.height;


    return {

        x:
            (evento.clientX - rect.left)
            * escalaX,

        y:
            (evento.clientY - rect.top)
            * escalaY
    };
}


function encontrarElemento(x, y) {


    for (
        let i = elementos.length - 1;
        i >= 0;
        i--
    ) {

        const elemento = elementos[i];


        if (elemento.tipo === "texto") {

            ctx.font = "24px Courier New";

            const largura =
                ctx.measureText(
                    elemento.texto
                ).width;


            const altura = 35;


            if (
                x >= elemento.x &&
                x <= elemento.x + largura &&
                y >= elemento.y &&
                y <= elemento.y + altura
            ) {

                return elemento;
            }
        }

        if (elemento.tipo === "imagem") {

            if (
                x >= elemento.x &&
                x <= elemento.x + elemento.largura &&
                y >= elemento.y &&
                y <= elemento.y + elemento.altura
            ) {

                return elemento;
            }
        }
    }


    return null;
}


canvas.addEventListener("mousedown", (evento) => {

    const posicao =
        obterPosicaoMouse(evento);


    const elemento =
        encontrarElemento(
            posicao.x,
            posicao.y
        );

    elementoSelecionado = elemento;


    if (elemento !== null) {

        arrastando = true;


        offsetX =
            posicao.x - elemento.x;

        offsetY =
            posicao.y - elemento.y;
    }


    desenharCanvas();
});


canvas.addEventListener("mousemove", (evento) => {

    if (
        !arrastando ||
        elementoSelecionado === null
    ) {
        return;
    }


    const posicao =
        obterPosicaoMouse(evento);


    elementoSelecionado.x =
        posicao.x - offsetX;


    elementoSelecionado.y =
        posicao.y - offsetY;


    desenharCanvas();
});


canvas.addEventListener("mouseup", () => {

    arrastando = false;
});


canvas.addEventListener("mouseleave", () => {

    arrastando = false;
});

document.addEventListener("keydown", (evento) => {


    if (elementoSelecionado === null) {
        return;
    }

    if (
        evento.key === "Delete" ||
        evento.key === "Backspace"
    ) {

        if (
            document.activeElement.tagName === "INPUT" ||
            document.activeElement.tagName === "TEXTAREA"
        ) {
            return;
        }


        const indice =
            elementos.indexOf(
                elementoSelecionado
            );


        if (indice !== -1) {

            elementos.splice(
                indice,
                1
            );
        }


        elementoSelecionado = null;

        desenharCanvas();
    }
});


const botaoSalvar =
    document.getElementById("saveJournal");

const campoNome =
    document.getElementById("fileName");

    const spinnerSalvar =
    document.getElementById("saveSpinner");

const textoSalvar =
    document.getElementById("saveText");

const formularioBug =
    document.getElementById("bugForm");

const mensagemBug =
    document.getElementById("bugMessage");

botaoSalvar.addEventListener("click", () => {

    let nome =
        campoNome.value.trim();

    if (nome === "") {
        nome = "meu-journal";
    }

    nome = nome.replace(
        /[<>:"/\\|?*]/g,
        "-"
    );

    spinnerSalvar.classList.remove("d-none");
    textoSalvar.textContent = "Salvando...";
    botaoSalvar.disabled = true;

    setTimeout(() => {

        const imagem =
            canvas.toDataURL("image/png");

        const link =
            document.createElement("a");

        link.download =
            `${nome}.png`;

        link.href =
            imagem;

        link.click();

        spinnerSalvar.classList.add("d-none");
        textoSalvar.textContent = "Salvo!";
        botaoSalvar.disabled = false;

        setTimeout(() => {
            textoSalvar.textContent = "Salvar página";
        }, 1500);

    }, 800);
});

desenharCanvas();

const formularioBug =
    document.getElementById("bugForm");

const mensagemBug =
    document.getElementById("bugMessage");


formularioBug.addEventListener("submit", (evento) => {

    evento.preventDefault();

    console.log("Mensagem enviada com sucesso!");

    mensagemBug.classList.remove("d-none");

    formularioBug.reset();

});