let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if (nomeAmigo === "") {
        alert("Por favor, insira o nome de um amigo.");
        return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
}