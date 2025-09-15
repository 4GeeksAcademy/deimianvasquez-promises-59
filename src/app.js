// const deimian = new Promise((resolve, reject) => {

//     const numRandon = Math.floor(Math.random() * 6)

//     if (numRandon % 2 == 0) {
//         resolve("El número es par, todo bien")
//     } else {
//         reject("El número es impar, todo mal")
//     }
// })

// //then - async/await
// console.log("Iniciando promesa")

// deimian
//     .then((cualquierCosa) => {
//         console.log(cualquierCosa) // guardar en un estado
//     }).catch((error)=>{
//         console.log(error)
//     })


// console.log("Finalizando promesa")


// ------------------------------------------

// function returnedPromiseHere() {
//     return new Promise((resolve, reject) => {
//         const numRandon = Math.floor(Math.random() * 6)

//         if (numRandon % 2 == 0) {
//             resolve("El número es par, todo bien")
//         } else {
//             reject("El número es impar, todo mal")
//         }

//     });

// }


// async function useAsyncFunction() {
//     try {
//         let result = await returnedPromiseHere();
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }


// }
// useAsyncFunction();


function promise1() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 1");

        }, 100);

    });

}

function promise2() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 2");

        }, 200);

    });

}

function promise3() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            resolve("Estoy resuelta como 3");

        }, 200);

    });

}

async function handlingAllPromises() {
    try {
        let [first, second, third] = await Promise.all([promise1(), promise2(), promise3()]);


        console.log(first);
        console.log(second);
        console.log(third);
    } catch (error) {
        console.log(error)
    } finally{
        console.log("Siempre me ejecuto")
        // cerramos el spiner 
    }


}

handlingAllPromises();