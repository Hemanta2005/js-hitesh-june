// const promiseOne = new Promise(function(resolve, reject){
//     //Do and async task
//     //DB calls, cryptography
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     }, 100)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
    
// })    //.then() has connection with resolve


// const promise2 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolved");
// })

// ///3rd one with DATA
// const promsie3 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Hemanta Biswas", email: "rfehjn@gmail.com"})
//     }, 1000)
// })

// promsie3.then(function(user){
//     console.log(user);
    
// })


// //4th
// const promise4 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error){
//             resolve({username: "Hemanta", email: "rbhi@jnf"})
//         } else {
//             reject('EROR: Something went wrong')  //Reject gives error
//         }
//     })
// })

// promise4
// .then((user) => {
//     console.log(user);
//     return user.username
// })
// .then((username) => {
//     console.log(username);
    
// })
// .catch(function(error){
//     console.log(error);
// }).finally(() => console.log("Finally done")
// )


// //5th
// const promise5 = new Promise (function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if(!error){
//             resolve({username: "JS", pass: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// })


// async function consumepromise5(){
//     const response = await promise5
//     console.log(response);
    
// }

// consumepromise5()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
        
//     }
    
// }
// getAllUsers()


//Same work by then and catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.catch((error) => console.log(error))
.then((data) => console.log(data))