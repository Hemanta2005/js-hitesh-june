// const scores = [50, 80, 90, 70]

// const totalScores = scores.reduce((acc, score) => {
//     return acc + score
// }, 0)
// console.log(totalScores);


// const expenses = [500, 1200, 300, 2000]

// const totalExpense = expenses.reduce((acc, expense) =>{
//     return acc + expense
// }, 0 )
// console.log(totalExpense);

 
const bikes = [
     {
        name: "KTM 390 Adventure",
        price: 400000
    },
    {
        name: "BMW G 310 GS",
        price: 350000
    },
    {
        name: "Himalayan 450",
        price: 300000
    }
]

const totalPrice = bikes.reduce((acc, item) => {
    return acc + item.price;

}, 0)
console.log(totalPrice);
