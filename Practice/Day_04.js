/*const bikes = ['KTM', 'Yamaha', 'BMW']

bikes.push('Honda')

console.log(bikes);*/



/*const bikes = ["ktm", 'yamaha', 'bmw']
bikes.pop()
console.log(bikes);
*/

/*const bikes = ['ktm', 'yamaha', 'honda', 'bmw']
console.log(bikes.includes('ktm'))
*/

/*const bikes = ['ktm', 'yamaha', 'bmw']
console.log(bikes.indexOf('yamaha'));*/

//const bikes = ['ktm', 'yamaha', 'bmw']
//console.log(bikes.join());

/*const array = [100, 200, 300, 400, 500]
const new_array = array.slice(1,4)
console.log(new_array);
console.log(array);

const spliced_arr = array.splice(1,4)
console.log(spliced_arr);
console.log(array);*/

/*const fruits = ['Apple', 'mango', 'Orange', 'Banana', 'Grapes']
const sliced_fruits = fruits.slice(1,4)
console.log(sliced_fruits);
console.log(fruits);*/

const cricketPlayers = ['Kohli', 'Rohit']
const footballPlayers = ['Ronaldo', 'Messi']

const allPlayers = cricketPlayers.concat(footballPlayers)
//console.log(allPlayers);

const allPlayers1 = [...footballPlayers, ...cricketPlayers]
//console.log(allPlayers1);

const arr = [1,2,[3,4],[5,[6,7]]]
const newarr = arr.flat(Infinity)
//console.log(newarr);

const team = ['Hemanta', 'Ripan', 'Rahul']
team.push('Aman')
//console.log(team);

const registeredTeam = ['Kings', 'Knights', 'Titans']
console.log(registeredTeam.indexOf('Knights'));
