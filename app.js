function toggleContent(result) {
    let divResult = document.getElementById('divResult');
    divResult.innerHTML  = `
        <p id="content">${result}</p>
        <button class="primary-button" onclick="copyContent()">Copiar</button>
    `;
}

function copyContent() {
    // Obtener el div
    let content = document.getElementById('content');
    // Crear un elemento de texto temporal para copiar el contenido
    const tempInput = document.createElement('textarea');
    tempInput.value = content.innerText; // Usar innerText para obtener solo el texto visible
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy'); // Ejecutar el comando de copiar
    document.body.removeChild(tempInput); // Eliminar el elemento temporal
}

function encriptar() {
    let texto = document.getElementById("inputText").value;

    if (/[^a-z\s]/.test(texto)) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    toggleContent(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("inputText").value;

    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        toggleContent(textoDesencriptado);
}