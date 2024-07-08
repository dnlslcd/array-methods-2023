/**
 * Dado el siguiente array de números, aplica adecuadamente cada uno de los métodos de array obteenr la información requerida
 *
 * Resultado esperado: https://oscarm.tinytake.com/msc/ODg4NjgxMF8yMjM0MDYyNg
 */

const numbers = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

/**
 * Utiliza la método forEach para mostrar cada número por consola
 */

// numbers.forEach((showEachNumber) => console.log("Soy un elemento del array: ", showEachNumber));

/**
 * Utiliza el método find para encontrar el primer número mayor de 10
 */

const findFirstNumberBiggerThan10 = numbers.find((elem) => elem > 10); 
console.log("Primer número mayor a 10: ", findFirstNumberBiggerThan10);


/**
 * Utliza el método some para saber si existe un número mayor de 20
 */

function numberBigger20(elem){
    return elem > 20;
}

const isThereNumberBiggerThan20 = numbers.some((elem) => elem > 20);
console.log("Existe un número mayor a 20? ", isThereNumberBiggerThan20);

/**
 * Utiliza el método every para comprobar si todos los números de este array son impares
 */

const areAllNumbersOdd = numbers.every((elem) => elem % 2 !== 0);
console.log("Son todos los números impares? ", areAllNumbersOdd);

/**
 * Utiliza el método filter para obtener un nuevo array con todos los números que son mayores de 3 pero menores de 9
 */

const newArray3and9 = numbers.filter((elem) => elem > 3 && elem < 9);
console.log("Números mayores a 3 pero menores a 9: ", newArray3and9);

/**
 * Utiliza el método map para obtener otro array donde, para cada posición, obtengamos un -1 si el número que ocupaba aquella posición es negativo, y un +1 si el nuemero es positivo
 * [-1, -1, -1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
 */

const newArrayPosAndNegs = numbers.map((elem) => elem < 0 ? -1 : 1);
console.log("Nuevos números con -1 para negativos y +1 para positivos: ", newArrayPosAndNegs);
