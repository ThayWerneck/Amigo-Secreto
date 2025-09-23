 let amigos = [];

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

        function sortear() {
            if (amigos.length < 2) {
                alert("Adicione pelo menos 2 amigos para realizar o sorteio!");
                return;
            }

            let sorteio = [...amigos];
            let resultado = "";

            // embaralhar
            sorteio.sort(() => Math.random() - 0.5);

            for (let i = 0; i < amigos.length; i++) {
                let amigo = sorteio[i];
                let amigoSecreto = sorteio[(i + 1) % sorteio.length];
                resultado += `${amigo} → ${amigoSecreto}<br>`;
            }

            document.getElementById("resultado").innerHTML = resultado;
        }