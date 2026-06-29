const mySym = Symbol("key1")
//It is like creating a unique key

const id1 = Symbol("key1")
const id2 = Symbol("key1")

//console.log(id1 === id2);
//This will shoe false cause even if both have key1 but still they are diffrent symbols 



const Person = {
    "name" : "Hemanta Biswas", 
    age : 20, 
    city : 'Kolkata'
}

/*console.log(Person ["name"]);
console.log(Person.age);
console.log(Person.city);*/


const Team = {
    teamName: "Kolkata Knight Riders",
    captain: "Shreyas Iyyer",
    players: 11
}
/*console.log(`Team Name: ${Team.teamName}`);
console.log(`Team captain: ${Team.captain}`);
console.log(`Team players: ${Team.players}`);*/


const player1 = {

    "name": "Hemanta",
    sport: "Cricket",
    age: 20

}

console.log(player1.sport);
player1.sport = "Football"
console.log(player1.sport);

player1.age = 21
console.log(player1.age);


const team  ={
    team_name : "Warriors"
}

team.captain = "Rahul"

console.log(team.captain);

