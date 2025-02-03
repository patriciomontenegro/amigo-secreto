// Sorteo de Amigos en JavaScript

let amigos = [];

document.addEventListener("DOMContentLoaded", function () {
    const nombreInput = document.getElementById("nombre");
    const adicionarBtn = document.getElementById("adicionar");
    const sortearBtn = document.getElementById("sortear");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    adicionarBtn.addEventListener("click", function () {
        let nombre = nombreInput.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        amigos.push(nombre);
        nombreInput.value = "";
        mostrarLista();
    });

    sortearBtn.addEventListener("click", function () {
        if (amigos.length === 0) {
            alert("La lista está vacía. Agrega nombres antes de sortear.");
            return;
        }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        resultado.textContent = "El amigo sorteado es: " + amigoSorteado;
    });

    function mostrarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nombre => {
            let li = document.createElement("li");
            li.textContent = nombre;
            listaAmigos.appendChild(li);
        });
    }
});
