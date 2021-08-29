// Parametros de Objetos

let name = "Gustav";
let age = 30;

// es5
let obj = {name: name, age: age};
// es6
let obj2 = { name, age};

console.log(obj)
console.log(obj2)

// Arrow Funtions

// es5

const names = [
    {name: "Gustav", age: 30},
    {name: "Nair", age: 29}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

// es6

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

// Promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(true) {
            resolve("Hey Ok, Resolve")
        } else {
            reject("Ups, algo no esta bien")
        }
    })
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log("Hola"))
    .catch(error => console.log(error));

