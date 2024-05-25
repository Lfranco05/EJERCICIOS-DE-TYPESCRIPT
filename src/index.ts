// EJERCICIO 1

function numeroAString(entrada: any): string {
    const unidades = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve"];
    const decenas = ["diez", "once", "doce", "trece", "catorce", "quince", "dieciséis", "diecisiete", "dieciocho", "diecinueve"];
    const decimos = ["", "", "veinte", "treinta", "cuarenta", "cincuenta", "sesenta", "setenta", "ochenta", "noventa"];
    const centenas = ["", "cien", "doscientos", "trescientos", "cuatrocientos", "quinientos", "seiscientos", "setecientos", "ochocientos", "novecientos"];

    function convertirANumeros(numero: number): string {
        if (numero < 10) return unidades[numero];
        if (numero < 20) return decenas[numero - 10];
        if (numero < 100) {
            if (numero % 10 === 0) return decimos[Math.floor(numero / 10)];
            return decimos[Math.floor(numero / 10)] + " y " + unidades[numero % 10];
        }
        if (numero < 200) {
            if (numero === 100) return "cien";
            return "ciento " + convertirANumeros(numero - 100);
        }
        if (numero < 1000) {
            if (numero % 100 === 0) return centenas[Math.floor(numero / 100)];
            return centenas[Math.floor(numero / 100)] + " " + convertirANumeros(numero % 100);
        }
        throw new Error("El número es demasiado grande para convertirlo");
    }

    try {
        const numero = parseInt(entrada, 10);
        if (isNaN(numero) || numero < 0 || numero > 999) {
            throw new Error("El argumento no es un número válido (debe estar entre 0 y 999)");
        }
        return convertirANumeros(numero);
    } catch (error) {
        if (error instanceof Error) {
            return `Error: ${error.message}`;
        }
        return "Error: El argumento no es un número válido";
    }
}

console.log("Utiliza numeros del 0 a 999");

console.log(numeroAString("500"));     
console.log(numeroAString("850"));     





//EJERCICIO 2
function obtenerElementoEnPosicion(lista: any[], posicion: number): any {
    try {
        if (posicion < 0 || posicion >= lista.length) {
            throw new Error("La posición no es válida. Debe estar entre 0 y " + (lista.length - 1));
        }
        return lista[posicion];
    } catch (error) {
        if (error instanceof Error) {
            return `Error: ${error.message}`;
        }
        return "Error: No se pudo obtener el elemento en la posición especificada";
    }
}

// Ejemplo de uso: el orden es de 0 a 4
const arregloEjemplo = ["a", "b", "c", "d", "e"];

console.log(obtenerElementoEnPosicion(arregloEjemplo, 3)); // Acá tirara el arreglo posicion 3 que es D
console.log(obtenerElementoEnPosicion(arregloEjemplo, 200)); // Acá tirara error,No hay arreglo en el 200



//EJERCICIO 4
function calcularSuperficieTriangulo(base: number, altura: number): number | string {
    try {
        if (base < 0 || altura < 0) {
            throw new Error("Los valores de base y altura deben ser positivos");
        }
        const superficie = (base * altura) / 2;
        return superficie;
    } catch (error) {
        if (error instanceof Error) {
            return `Error: ${error.message}`;
        }
        return "Error: No se pudo calcular el área del triángulo.";
    }
}

console.log(calcularSuperficieTriangulo(80, 100));  // Debería imprimir 8000 
console.log(calcularSuperficieTriangulo(-5, 10)); // Error porque son negativos



//EJERCICIO 5

/* EJERCICIO 5 */
function abrirYLeerArchivo(nombreArchivo: string) {
    let fichero: any;

    try {
        fichero = simularAbrirArchivo(nombreArchivo);
        // Operaciones con el archivo
        console.log(`Realizando operaciones con el archivo: ${fichero.nombre}`);
        
        // Simulamos un error para probar el bloque finally
        throw new Error("Error simulado durante la operación del archivo.");
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`);
        } else {
            console.error('Error desconocido', error);
        }
    } finally {
        if (fichero) {
            simularCerrarArchivo(fichero);
        }
    }
}

// Funciones simuladas de abrir y cerrar archivos
function simularAbrirArchivo(nombreArchivo: string) {
    console.log(`Abriendo archivo: ${nombreArchivo}`);
    return { nombre: nombreArchivo }; // Simulación de objeto de archivo
}

function simularCerrarArchivo(fichero: any) {
    console.log(`Cerrando archivo: ${fichero.nombre}`);
    // Realizar acciones de cierre del archivo (simulado)
}

abrirYLeerArchivo("miArchivo.txt");



//EJERCICIO 6
/* EJERCICIO 6 */
function calcularExpresionCompleja(y: number): number {
    try {
        // Calculamos y + 5
        const suma = y + 5;

        // Multiplicamos (y + 5) por 2
        const resultado = suma * 2;

        return resultado;
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error en calcularExpresionCompleja: ${error.message}`);
        } else {
            console.error('Error desconocido en calcularExpresionCompleja', error);
        }
        throw error; // Propagar el error a la función llamante
    }
}

function realizarOperacionCompleja(y: number) {
    try {
        const resultado = calcularExpresionCompleja(y);
        console.log(`Resultado de la evaluación de la expresión compleja: ${resultado}`);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error en realizarOperacionCompleja: ${error.message}`);
        } else {
            console.error('Error desconocido en realizarOperacionCompleja', error);
        }
    }
}

// Ejemplo de uso: Y= Y+5x2
realizarOperacionCompleja(40); //Colocamos el valor asignado a Y

