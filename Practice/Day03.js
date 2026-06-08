const toss = Math.floor(Math.random() * 2)

if (toss === 0){
    console.log('Heads')
} else {
    console.log('Tails');
    
}

const luckyNumber = Math.floor(Math.random() * 10 + 1)
console.log(luckyNumber);


const currentYear = new Date().getFullYear()
console.log(`Current year is: ${currentYear}`);

const currentYear2 = new Date().getFullYear()
const birthYear = 2005
const age = currentYear2 - birthYear
console.log(`The current year is: ${currentYear2}`);
console.log(`Birth year is: ${birthYear}`);
console.log(`Age is: ${age}`);

const jerseyNumber = Math.floor(Math.random()*100 + 1)
console.log(jerseyNumber);

const cricketOver = Math.floor(Math.random()*20) + 1
console.log(cricketOver);

const playerID = Math.floor(Math.random()*9000) + 1000
console.log(playerID);

const matchCode = Math.floor(Math.random()*900) + 100
console.log(matchCode);

const matchDate = new Date
console.log("Match created on: ");
console.log(matchDate.toLocaleString());

