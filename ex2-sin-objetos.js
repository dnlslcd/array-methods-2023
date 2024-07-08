const students = [
  "Albertina",
  "Katerina",
  "Ester",
  "Galis",
  "Oriol",
  "Susana",
  "McCarmen",
  "Gerard",
  "Dayane",
  "Susana",
  "Diego",
  "Maria",
];

// Resultado esperado: https://oscarm.tinytake.com/msc/ODg4Njg3NV8yMjM0MDcwNg

// Utiliza el método forEach para mostrar cada elemento del array por la consola
// students.forEach((elem) => console.log(elem));


// Utiliza el método findIndex para encontrar que índice ocupa el string "Maria"
const mariaIndex = students.findIndex((elem) => elem == "Maria");
console.log("Índice donde se encuentra el array `Maria`: ", mariaIndex);


// Utiliza el método some para saber si en este array existe la alumna "Katerina"
const isThereAKaterina = students.some((elem) => elem == "Katerina");
console.log("En este array existe una alumna llamada Katerina? ", isThereAKaterina);


// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres(longitud)
const firstName5orLess = students.find((elem) => elem.length <= 5);
console.log("Primer nombre con 5 o menos carácteres: ", firstName5orLess);


// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
const areAllStringsFourOrMoreCharacters = students.every((elem) => elem.length >= 4);
console.log("Tienen todos los strings 4 o más carácteres? ", areAllStringsFourOrMoreCharacters);


// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
const namesWithI = students.filter((elem) => elem.includes("i"));
console.log("Nuevo array con nombres que incluyan la i: ", namesWithI);


// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
const namesInitial = students.map((elem) => elem.charAt(0));
console.log("Nuevo array con las iniciales de los nombres: ", namesInitial);

