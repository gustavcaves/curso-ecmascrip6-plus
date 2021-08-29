// Default Params y Concatenación

// Default Params

// Antes

function newFunction(name, age, country) {
    var name = name || "oscar";
    var age = age || 32;
    var country = country || "MX";
    console.log(name, age, country);
}

newFunction();

// Ahora

function newFunction2(name = "Oscar", age = 32, country = "MX") {
    console.log(name, age, country);
}

newFunction2();
newFunction2("Ricardo", 23, "COL")

// Concatenacion

// Antes

let hello = "Hello"
let world = "World"
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)

// Ahora 
// Se debe usar las comillas de tildes o comillas francesas

let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)