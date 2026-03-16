
// 1. Referencias a los elementos del HTML
const inputOriginal = document.getElementById('input-original');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

// 2. Definición del alfabeto en español (27 letras)
const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "ñ", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

/**
 * Función principal que realiza el cifrado
 */
function cifrar() {
    const texto = inputOriginal.value;
    const desplazamiento = parseInt(rango.value);
    let mensajeCifrado = "";

    for (let letra of texto) {
        // Detectamos si la letra es mayúscula
        const esMayuscula = letra === letra.toUpperCase() && letra !== letra.toLowerCase();
        
        // Pasamos a minúscula para buscar en nuestro array de referencia
        const letraMinuscula = letra.toLowerCase();

        // Si la letra no está en el alfabeto (ej: espacio, número, emoji), se añade tal cual
        if (!alfabeto.includes(letraMinuscula)) {
            mensajeCifrado += letra;
            continue;
        }

        // Aplicamos la lógica del Cifrador César
        const posicionActual = alfabeto.indexOf(letraMinuscula);
        
        // Usamos el módulo (%) con la longitud del alfabeto para que sea circular
        const nuevaPosicion = (posicionActual + desplazamiento) % alfabeto.length;
        
        let letraCifrada = alfabeto[nuevaPosicion];

        // Si originalmente era mayúscula, la devolvemos a mayúscula
        mensajeCifrado += esMayuscula ? letraCifrada.toUpperCase() : letraCifrada;
    }

    // Mostramos el resultado. Si está vacío, mostramos un mensaje por defecto.
    resultado.innerText = mensajeCifrado || "Tu texto cifrado aparecerá aquí...";
}

// 3. Listeners para detectar cambios en tiempo real
inputOriginal.addEventListener('input', cifrar);
rango.addEventListener('input', cifrar);
