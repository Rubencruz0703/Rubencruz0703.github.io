const inputOriginal = document.getElementById('input-original');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');
const btnCopiar = document.getElementById('btn-copiar');

const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

function cifrar() {
    const texto = inputOriginal.value;
    const desplazamiento = parseInt(rango.value);
    let mensajeCifrado = "";

    for (let letra of texto) {
        const esMayuscula = letra === letra.toUpperCase() && letra !== letra.toLowerCase();
        const letraMinuscula = letra.toLowerCase();

        if (!alfabeto.includes(letraMinuscula)) {
            mensajeCifrado += letra;
            continue;
        }

        const posicionActual = alfabeto.indexOf(letraMinuscula);
        const nuevaPosicion = (posicionActual + desplazamiento) % alfabeto.length;
        let letraCifrada = alfabeto[nuevaPosicion];

        mensajeCifrado += esMayuscula ? letraCifrada.toUpperCase() : letraCifrada;
    }

    resultado.innerText = mensajeCifrado || "Tu texto cifrado aparecerá aquí...";
}

// Nueva función para copiar al portapapeles
async function copiarTexto() {
    const textoParaCopiar = resultado.innerText;
    
    // Evitamos copiar el mensaje por defecto
    if (textoParaCopiar === "Tu texto cifrado aparecerá aquí..." || textoParaCopiar === "") return;

    try {
        await navigator.clipboard.writeText(textoParaCopiar);
        
        // Feedback visual en el botón
        const originalText = btnCopiar.innerText;
        btnCopiar.innerText = "¡Copiado! ✅";
        btnCopiar.style.backgroundColor = "#48bb78"; // Color verde
        
        setTimeout(() => {
            btnCopiar.innerText = originalText;
            btnCopiar.style.backgroundColor = ""; // Vuelve al color original del CSS
        }, 1500);
    } catch (err) {
        console.error("Error al copiar: ", err);
    }
}

inputOriginal.addEventListener('input', cifrar);
rango.addEventListener('input', cifrar);
btnCopiar.addEventListener('click', copiarTexto);
