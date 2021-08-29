// Objets. entries que permite devolver la clave y valor de una matrix

const data = {
    fronted: "Oscar",
    backend: "Isabel",
    desing: "Ana",
}

const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)


const data = {
    fronted: "Oscar",
    backend: "Isabel",
    desing: "Ana",
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

//Trailing comas, nos permite asignar elementos al objeto mediante comas.
const data= {
    front:'Alej', // Puede existir
    back: 'Rel'
}
