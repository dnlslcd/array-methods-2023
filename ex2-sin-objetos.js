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
function showAllNames(elem){
  console.log(elem);
}

const arrayElements = students.forEach(showAllNames);


// Utiliza el método findIndex para encontrar que índice ocupa el string "Maria"
function indexMaria(elem){
  return elem == "Maria";
}

const mariaIndex = students.findIndex(indexMaria);
console.log("Índice donde se encuentra el array `Maria`: ", mariaIndex);


// Utiliza el método some para saber si en este array existe la alumna "Katerina"
function katerinaExists(elem){
  return elem == "Katerina";
}

const isThereAKaterina = students.some(katerinaExists);
console.log("En este array existe una alumna llamada Katerina? ", isThereAKaterina);


// Utiliza el método find para saber el primer nombre que tiene 5 o menos carácteres
function fiveOrLessChars(elem){
  return elem.length <= 5;
}

const firstName5orLess = students.find(fiveOrLessChars);
console.log("Primer nombre con 5 o menos carácteres: ", firstName5orLess);


// Utiliza el método every para comprobar si todos los strings de este array tienen 4 o más carácteres
function fourOrMoreChars(elem){
  return elem.length >= 4;
}

const areAllStringsFourOrMore = students.every(fourOrMoreChars);
console.log("Tienen todos los strings 4 o más carácteres? ", areAllStringsFourOrMore);


// Utiliza el método filter para obtener un nuevo array que solo incluya aquellos nombres que contengan la letra i
function containsI(elem){
  return elem.includes("i");
}

const namesWithI = students.filter(containsI);
console.log("Nuevo array con nombres que incluyan la i: ", namesWithI);


// Utiliza el método map para obtener un nuevo array donde aparezca solamente la primera inicial de cada nombre
function nameInitial(elem){
  return elem.charAt(0);
}

const namesInitial = students.map(nameInitial);
console.log("Nuevo array con las iniciales de los nombres: ", namesInitial);

