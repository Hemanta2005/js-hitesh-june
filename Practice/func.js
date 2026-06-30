function sayHello() {
    console.log('Hello Hemanta');
    
}
sayHello();

function showBike() {
    console.log('My fav bikes is Duke 390');
    
}
showBike()

function showAge(){
    console.log('My age is 20');
    
}
showAge()

function userName(username){
    if (username === undefined){
        console.log('Please enter a username!');
        return
        
    }
    return `Hii ${username}`
    
}
console.log(userName('Hemanta'));


function addNumbers (num1, num2){

    return num1 + num2

}
//const result = addNumbers(6, 8)
//console.log(result);

function subNumbers (N1, N2){

    if(N1<N2){
        console.log('first numgebhir');
        return
        
    }

    return N1 - N2

}
//const result = subNumbers(9, 6)
//console.log(result);

function multi(num1, num2){

    return num1 * num2

}

//const result = multi(9, 7)
//console.log(result);

function square(num1, num2){
    return num1 ** num2
}
//const result = square(7, 2)
//console.log(result);

