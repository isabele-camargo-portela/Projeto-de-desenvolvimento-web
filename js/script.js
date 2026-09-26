const formularioBug =
    document.getElementById("bugForm");

const mensagemBug =
    document.getElementById("bugMessage");

const modalBug =
    document.getElementById("bugModal");


formularioBug.addEventListener("submit", (evento) => {

    evento.preventDefault();

    console.log("Mensagem enviada com sucesso!");

    mensagemBug.classList.remove("d-none");

    formularioBug.reset();
});


modalBug.addEventListener("hidden.bs.modal", () => {

    mensagemBug.classList.add("d-none");

    formularioBug.reset();

});