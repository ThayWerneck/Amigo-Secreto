let amigos = [];
let paresSorteados = [];
let indiceAtual = 0;
let sorteioFeito = false;

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === "") {
        alert("Por favor, insira o nome de um amigo.");
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    inputAmigo.value = "";
    inputAmigo.focus();
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearOuProximo() {
    if (!sorteioFeito) {
        // ainda não sorteou → realiza sorteio
        if (amigos.length < 2) {
            alert("Adicione pelo menos 2 amigos para realizar o sorteio!");
            return;
        }

        let sorteio = [...amigos];
        sorteio.sort(() => Math.random() - 0.5);

        paresSorteados = [];
        for (let i = 0; i < sorteio.length; i++) {
            let amigo = sorteio[i];
            let amigoSecreto = sorteio[(i + 1) % sorteio.length];
            paresSorteados.push(`${amigo} → ${amigoSecreto}`);
        }

        indiceAtual = 0;
        sorteioFeito = true;

        mostrarProximoPar();
        document.getElementById("botaoSorteio").innerHTML = `
            <img src="assets/play_circle_outline.png" alt="Ícone para próximo">
            Próximo
        `;
    } else {
        // já sorteou → mostra próximo
        mostrarProximoPar();
    }
}

function mostrarProximoPar() {
    if (indiceAtual < paresSorteados.length) {
        document.getElementById("resultado").textContent = paresSorteados[indiceAtual];
        indiceAtual++;
    } else {
        alert("Todos os pares já foram revelados!");
        document.getElementById("resultado").textContent = "";
        document.getElementById("botaoSorteio").innerHTML = `
            <img src="assets/play_circle_outline.png" alt="Ícone para sortear">
            Sortear amigo
        `;
        sorteioFeito = false;
    }
}
