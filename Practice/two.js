// const languages = ['js', 'py', 'java', 'cpp', 'r']
// const colsun = languages.forEach((items) => {
//     //return console.log(`Languag: ${items}`);
    
// })
// //console.log(colsun);


// const bikes = ['ktm', 'triumph', 'yamha', 'ducati']
// const newBikes = bikes.forEach((items) => {
//     //return console.log(`Bike: ${items}`);
    
// })

// const num = [5, 10, 20, 13, 45, 6, 7, 1, 18]
// const newNum = num.forEach((items) => {
//     if (items>10){
//         //return console.log(items);
//     }
// })

// const bikePrices = [100000, 300000, 150000, 200000, 400000, 1500000]
// const filteredPrices = bikePrices.forEach((items) => {
//     if (items >= 300000){
//         //return console.log(items);
        
//     }
// })

// const sports  =['cricket', 'football', 'e sports', 'badminton', 'tennis']
// const newSports = sports.forEach((items) => {
//     //return console.log(items);
    
// })

// const scores = [45, 67, 69, 43, 12, 90, 76]
// const newScores = scores.filter((items) => scores > 43 )
// //console.log(scores);

// const num = [3, 4, 5, 6, 7,8 ,9, 1, 10]

// const evenNum = num.filter((items) =>{num % 2 === 0})
// return console.log(evenNum);


// const names = ["Sam", "Hemanta", "Raj", "Abhishek", "Rohit"]
// const newNames = names.filter ((names) => names.length >= 7)
// console.log(newNames);


// const players = [
//     {
//         name: "Virat",
//         sport: "Cricket"
//     },
//     {
//         name: "Messi",
//         sport: "Football"
//     },
//     {
//         name: "Rohit",
//         sport: "Cricket"
//     },
//     {
//         name: "Ronaldo",
//         sport: "Football"
//     }
// ]
// const cricPlayers = players.filter((items) => {
//     return items.sport === 'Cricket'
// })
// return console.log(cricPlayers);


const teams = [
    {
        name: "Warriors",
        city: "Kolkata",
        players: 11
    },
    {
        name: "Titans",
        city: "Delhi",
        players: 8
    },
    {
        name: "Kings",
        city: "Kolkata",
        players: 9
    },
    {
        name: "Strikers",
        city: "Mumbai",
        players: 11
    }
]

const kolTeams = teams.filter((items) => {
    return items.city == 'kolkata'
})

kolTeams.forEach((team) => {
    return console.log(`Kolkata Team: ${team.name}`);
})

