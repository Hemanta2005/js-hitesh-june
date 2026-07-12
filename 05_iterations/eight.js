const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 3)

const myTotal = myNums.reduce ( (acc, curr) => acc + curr, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: 'js', 
        price: 2999
    }, 
    {
        itemName: 'py',
        price: 999
    }, 
    {
        itemName: 'mobile dev course',
        price: 4999
    },
    {
        itemName: 'data science', 
        price: 12999
    }
]

const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);
