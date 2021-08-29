// Multilina en los Strings

//Antes 

let lorem = "Esta es la linea 1 \nY continuando en otra linea"
console.log(lorem)

// Ahora es6

let lorem2 = `Otra Linea
Hacemos un enter y continuamos escribiendo
Y aqui otra linea
`
console.log(lorem2)


// Desestructuracion de Elementos

let person = {
    'name': "Oscar",
    'age': 32,
    'country': "MX"
}

console.log(person.name, person.age, person.country);

// Ahora

let {name, age} = person;
console.log(name, age);

// Operador de Propagración

let team1 = ["Oscar", "Julian", "Ricardo"]
let team2 = ["Valeria", "Jessica", "Camila"]

let education = ["David", ...team1, ...team2]

console.log(education)

// LET

var hola = "Hola" // Disponible de forma global

{
    var globalVar = "Global Var" // Scope Global
}

{
    let globalLet = "Global Let" // Scope Local
    console.log(globalLet)
}

console.log(globalVar)
console.log(globalLet)


// Const

const a = "b"; // No se puede reagisnar
a = "a"
console.log(a)
