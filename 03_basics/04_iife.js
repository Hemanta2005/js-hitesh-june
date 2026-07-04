//IIFE: immidiately invoked function expressions


(function chai(){
    //named iffe
    console.log(`DB CONNECTED`);
    
})();

//we write iife so that no pollution from global scope comes inside our functionc 

( (name) => {
    //unammed iffe
    console.log(`DB CONNECTED ${name}`);
    
})('efrbh')