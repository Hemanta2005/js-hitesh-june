//FOR EACH LOOP

const coding = ['js', 'rub', 'java', 'python', 'cpp']

const values = coding.forEach( (item) => {
    //console.log(item);
    return;
    
} )

//console.log(values);  


// Agar hum andhar ke .log ko comment kare then only undefined
// Agar sirf bahar wale ko comment kare toh there is no undefined coming 
// Why?
// console.log(item) prints each array element.
//
// forEach() itself returns undefined,
// so `values` stores undefined.
//
// If console.log(values) is commented,
// undefined is still stored in `values`,
// but it is not printed.
//
// If console.log(item) is commented,
// array items are not printed,
// so only console.log(values) prints undefined.


//FILTER

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4 )
// console.log(newNums); /* 1 */

// const morNums = myNums.filter((num) => {
//     return num > 4;
// })
// console.log(morNums); /* 2 */

//At 1 we are getting our answer as log but at 2 we r getting empty array
//cause at 1 we r using implicit value so we r getting it in one line 
//but at 2 we r using {} so it is creating a new scope to get our results here we must use
//'return' keyword before num

//Same by using for-each\\

// const newNums = []
// const sera = myNums.forEach((num) => {
//     if (num > 4) {
//        newNums.push(num)
//     }
// }) 
// console.log(newNums);


