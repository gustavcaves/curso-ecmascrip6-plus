// Crear una funcion, crear una promesa y despues invocarla

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve("Hello World"), 3000)
            : reject(new Error("Test Error"))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    // const hello2 = await 
    console.log(hello)
}

helloAsync()

const anotherFuntion = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

anotherFuntion()




// Async Await
const prepareIceCream = (money) => {
    return new Promise((resolve, reject) => {
        if(money >= 500) {    
            console.log('We are preparing your Ice cream...')
            setTimeout(() => {
                resolve('Here you are a Chocolate Ice cream');
            }, 6000);  //3. Si el dinero que ingresaste es mayor o igual a 500, entonces te preparamos el helado. El proceso toma 6 segundos.
        } else {
            reject('Sorry! You do not have enough money :('); //3. Si el dinero es menor a 500, lo sentimos, no te alcanza
        }
    });
}


const buyIceCream = async (money) => { 
    try{
        console.log('Welcome to Ice Cream World!');
        const result = await prepareIceCream(money); //2. Esperas aquí mientras envíamos el dinero, lo verifican y te preparan el helado 
        console.log(result); //4. Imprimimos tu pedido! si todo salió bien.
        console.log('Thanks for your purchase!');
    } catch(e) {
        console.log(e); //4. Te decimos que no salió bien el proceso porque tu dinero no es suficiente.
    }
}


buyIceCream(600); //1. llamas a la funcion comprar helado e Ingresas el dinero