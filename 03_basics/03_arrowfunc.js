const user = {

    username: 'hitesh', 
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //console.log(this);
   
    }

}

//user.welcomeMessage()
//user.username = 'sam'
//user.welcomeMessage()
//console.log(this);

/* function chai(){
    let username  = 'hemanta'
    console.log(this.username);
    
}

chai() */

//Arrow fxn

const chai = () => {           //Method to write arrow fxn
    let username = 'hitesh'
    console.log(this.username);
    
}
//chai()

/*const addTwo = (num1, num2) => {
    return num1 + num2
}*/



const addTwo = (num1, num2) =>  (num1 + num2)  //Implicit return method

console.log(addTwo(6,7))

//Sidhi baat: In arrow functions if use {} then u must type return keyword
// if u use () then no need to write return keyword 

