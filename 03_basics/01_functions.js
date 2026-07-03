/* function addTwoNumbers(number1, number2){

    console.log(number1 + number2)
}  */



//Here in this: addTwoNumbers is reference to the function and adding () at the end is calling the function after the reference 

//Here number1 and number2 are PARAMETERS
//3 and 4 are ARGUEMENTS 

function addTwoNumbers(number1, number2){

    //let result = number1 + number2
    //return result
    //console.log('rfrebhj'); This line will not get printed 
    //cause once u do the return in function 
    //no other print can be done inside it 

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

//console.log('Result: ', result);


    
function loginUserMsg (username){
    if(username === undefined){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}

console.log(loginUserMsg());
 //in 34th line if we didn't add anything and put only ''  or  "" the print would be   
 // just logged in

 //if we didn't even add parenthesis then print wold be 
 // undefined just logged in 

 //But why????
 //=>

//How do we repair it??
//=> We insert an if statement inside our function for the ubndefined case and if there is a undefined then we just want the 
//function to stop its working and for that we use "return" inside our function that stops the function 



//Passing objects and arrays inside a function

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500));
//Yaha pe ... is not spread operator it is rest operator 
// this will let the termibnal take all the values after 200 or the first one and turn it into an array

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 3478));
//Same function mein second wale pe 200 aur 400 val1 and val2 pe chali jayegi 

const user = {
    username: 'Hitesh', 
    price: '199'
}

function handleObject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObject(user)

const myNewArr  =[200, 400, 600, 800]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArr));
