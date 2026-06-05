console.log(null > 0); //false
console.log(null == 0); // false
console.log(null >= 0); // true  
// the reason is equality check == and comparision > < >= <= work differently...
//Comparision convert null to a number, treating it as 0. Thats why (3) null >= 0 is true
//and (1) null >0 is false

console.log("2" === 2);
