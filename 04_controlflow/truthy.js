
const username = ''

if (username) {
    console.log('Got user email');
    
} else {
    console.log("Don't have user email");
    
}

// falsy values ==== 
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}, 

// if (userEmail.length === 0){
//     console.log('Array is empty');
// }

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined
//This saves our programm from null: if there is null and undefined somewhere it cuts out null and uses the other operator 

let val1; 
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 8
//val1 = null ?? 10 ?? 18
//val1 = null ?? undefined //this case will give undefined 
console.log(val1);


//Terniary Operator 
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log('more than 80');
