let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        console.log("Intento de agregar un nombre vacío.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        console.log(`El nombre "${nombre}" ya está en la lista.`);
        return;
    }

    amigos.push(nombre);
    console.log(`Se agregó: ${nombre}. Lista actual:`, amigos);
    limpiarResultado();
    actualizarLista();// Borra el mensaje del resultado anterior
    input.value = ""; // Limpiar el campo después de añadir
    input.focus(); // Volver a enfocar el campo de entrada
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
    console.log("Lista de amigos actualizada en la interfaz.");
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Debe agregar al menos un amigo para realizar el sorteo.");
        console.log("Intento de sorteo sin amigos en la lista.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    console.log(`Sorteo realizado. Amigo secreto: ${amigoSecreto}`);

    // Ocultar la lista de nombres
    document.getElementById("listaAmigos").innerHTML = "";

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSecreto}</strong></li>`;
    
    // Vaciar la lista de amigos para que no se pueda volver a sortear con los mismos nombres
    amigos = [];
    console.log("Lista de amigos vaciada después del sorteo.");
}
function limpiarResultado() {
    document.getElementById("resultado").innerHTML = "";
}
