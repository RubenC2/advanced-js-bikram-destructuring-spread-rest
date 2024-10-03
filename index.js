//RESUELVE LOS EJERCICIOS AQUÍ
//- [ ] 1.- Dado el objeto **empleados**, extrae la empleada Ana completa.

const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
];

//let ana = console.log(empleados[1])
let ana = empleados.find(empleado => empleado.name === "Ana");

console.log(ana)

//  Ejercicio 2 - Dado el objeto empleados, extrae el email de luis en la variable emailLuis

let emailLuis =  empleados.find(empleado=> empleado.name === "Luis").email;
console.log(emailLuis)


// Ejecicio 3 - Dadas las variables a y b intercambia sus valores
//// Inicialmente
//let a = 5;
//let b = 3;
//Al final
//let a = 3;
//let b = 5;

const cambio = { a = 5, b = 3 } = { a: 3, b:5 };
console.log(cambio)

// Ejecicio 4 - Dado el objeto HIGH_TEMPERATURES cambiar las siguientes líneas 
//para guardar mediante destructuración los valores de temperaturas 
//en las variables maximaHoy y maximaManana 

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
const maximaHoy = HIGH_TEMPERATURES.today;
const maximaManana = HIGH_TEMPERATURES.tomorrow;
console.log(maximaHoy);
console.log(maximaManana);

//const { today, tomorrow } = HIGH_TEMPERATURES;
//
//console.log(today);
//console.log(tomorrow);

//Ejercicio 5 - Escribe una función llamada sumEveryOther que pueda recibir cualquier 
//cantidad de números y devuelva la suma de todos los demás argumentos. 
//> sumEveryOther(1,2,3,4,5) es igual a 15
//sumEveryOther(6, 8, 2, 3, 1); //20
//sumEveryOther(11, 3, 12); //26

function sumEveryOther(...rest) {
    let total = 0;
        for (let i = 0; i < rest.length; i++) {
        total += rest[i];
  }
  return total;
}
console.log(sumEveryOther(6, 8, 2, 3, 1)); //20
console.log(sumEveryOther(11, 3, 12)); //26

// Ejercicio 6 - Escribe una función llamada addOnlyNums que pueda recibir 
//cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números) 
//> addOnlyNums(1,"perro", 6, "gato", "ratón", 7) to equal 14

//function addOnlyNums(...rest) {
//    let total = 0;
//  
//    for (let i = 0; i < rest.length; i++) {
//      total += args[i];
//    }
//    return total;
//  }
//  console.log(addOnlyNums(1,"perro", 6, "gato", "ratón", 7))

function addOnlyNums(...rest) {
    // Destructuramos el array y filtramos solo los números
    const [numbersOnly] = [rest.filter(arg => typeof arg === "number")];
    // Sumamos los números
    return numbersOnly.reduce((sum, num) => sum + num, 0);
  }
  console.log(addOnlyNums(1, "perro", 2, 4, "gato", "ratón", 1, 6));

 //  Ejercicio 7 - Escribe una función llamada countTheArgs que pueda recibir cualquier 
 //número de argumentos y devuelva un número que indique cuántos argumentos ha recibido. 
 //> countTheArgs(1,"perro", 6, "gato", "ratón", 7) to equal 6 
 function countTheArgs(...args) {
        return args.length 
    }
 console.log(countTheArgs(1,"perro", 6, "gato", "ratón", 7))

 //Ejercicio 8 - Escribe una función llamada combineTwoArrays que reciba dos array cómo 
 //argumentos y devuelva solo un array que combine los dos (usando spread operator). 
 //> combineTwoArrays([1, 2, 3], [4, 5, 6]) devuelve [1, 2, 3, 4, 5, 6]
 let arr1 = [1,2,3]
 let arr2 = [4,5,6]

function combineTwoArrays(arr1,arr2) {
    return [...arr1, ...arr2];
}
let arr3 = combineTwoArrays(arr1, arr2);
console.log(arr3)

//Ejercicio 9 - Escriba una función llamada onlyUniques que acepte cualquier número 
//de argumentos y devuelva un array de elementos únicos, sin repetidos. 
//> onlyUniques("gato", "pollo", "cerdo", "cerdo") devuelve ['gato', 'pollo', 'cerdo']
//onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
function onlyUniques(...z) {
    let arrUniques = [];

    z.forEach((item) => {
        if (!arrUniques.includes(item)) {
            // arrUniques.push(item);
            uniques = [...uniques, item]
        }
    }); 
    return arrUniques;
}

//Ejercicio 10 - Escriba una función llamada combineAllArrays que pueda recibir 
//cualquier cantidad de arrays como argumentos y los combine todos en un solo array.. 
//> combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]) devuelve [3, 6, 7, 8, 2, 7, 3, 1]

function combineAllArrays(...z) {
    let result = []
    z.forEach((item) => {
        result = result.concat(item);
    })
    return result
}   

console.log(combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1]))

//Ejercicio 11 - Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, 
//los eleve al cuadrado y devuelva la suma de todos los valores cuadrados. 
//> sumAndSquare(1,2,3,4,5,6) devuelve 91

function sumAndSquare(...n) {
    let result = []
    n.map(item)  
    }
