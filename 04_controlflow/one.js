
//if statement 

// const isUserLoogedIn = true

// if (isUserLoogedIn){

// }

// if(condition /*should be true*/){

// }

//In JS = means addigining value
// == means checking if they are equal or comparing them 


// const score = 200

// if (score > 200) {

//     const power = 'fly'
//     console.log(`User power: ${power}`);
    
// }


//SHORTHAND NOTATION 
//const balance = 1000
//if (balance > 500) console.log("test"), console.log(test2);

// if (balance < 500){
//     console.log("less than 500");

// } else if (balance < 750){
//     console.log("less than 750");
    

// } else if (balance< 950){
//     console.log("less than 950");
    
// } else {
//     console.log('less than 1200');
    
// }

const userLoggedIn = true 
const debitCard = true
const loggedInFromGoogle = false 
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 9==9){
    console.log('allowed to buy');
}

if (loggedInFromEmail || loggedInFromGoogle){  //|| is used for 'or'
    console.log('user logged in');   
}

