const myArr = [0,1,2,3,4,5]


//console.log(myArr[0]);

//Array methods 

//myArr.push(6)  //Value add krne ke liye 
//myArr.pop()  //last value removed
//myArr.unshift(9) //start mein insert 
//myArr.shift() //unshift wale ko hata diya

//console.log(myArr.includes(9));
//console.log(myArr.indexOf(9));
//console.log(myArr.indexOf(3));

/*const newArr = myArr.join()



console.log(typeof myArr);
console.log(typeof newArr);*/ 

//slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3)
console.log('C', myArr);

console.log(myn2);





