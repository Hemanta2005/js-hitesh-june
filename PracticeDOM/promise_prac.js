// new Promise(function(resolve, reject){
//     setTimeout(()=> {
//         console.log('Task finished');
//         resolve()
//     }, 2000)
// }).then(function(){
//     console.log("Promise consumed");
// })

//2
// const promies2 = new Promise (function(resolve, reject){
//     setTimeout(function(){
//         resolve({
//             bikeName: 'Duke 390', 
//             bikePrice: 400000
//         })
//     }, 2000)
// })
// promies2.then(function(data){
//     console.log(data.bikeName);
//     console.log(data.bikePrice);
    
// })

//3
// const promise3 = new Promise(function(resolve, reject){
//     setTimeout(function(){let error = false
//     if (!error){
//         resolve()
//     }else {
//         console.log("Something went wrong");
//     }}, 1000)
// })

// promise3.then(function(){
//     console.log('No error');
    
// }).catch(function(error){
//     console.log(error);
    
// })


//4
// const promise4 = new Promise(function(resolve){
//     setTimeout(() => {
//         resolve({
//             bikeName: "765 RS", 
//             bikePrice: 1500000
//         })
//     }, 1000)
// })

// promise4.then(function(bike){
//     return bike.bikeName
//     return bike.bikePrice
// })
// .then(function(bikeName){
//     console.log(bikeName);
    
// })
// .then(function(bikePrice){
//     console.log(bikePrice);
    
// })
//5
// const promise5 = new Promise(function(resolve){
//     console.log("...Loading");
//     setTimeout(() => {
//         resolve()
//     }, 2000)
// })
// promise5.then(function(){
//     console.log("Loaded");
    
// })
// .finally(function(){
//     console.log("Finally done");
    
// })