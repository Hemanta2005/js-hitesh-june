const marvel_heroes = ['Thor', 'Ironman', 'Spiderman']
const dc_heroes = ['Superman', 'Flash', 'Batman']

//marvel_heroes.push(dc_heroes)
//console.log(marvel_heroes);

const new_heroes = marvel_heroes.concat(dc_heroes) //CONCAT METHOD
//console.log(new_heroes);  //aise karoge toh array ache se join hogi otherwise 2nd array
//pura ka pura ek element ban jayegi 

const all_new_heroes = [...marvel_heroes, ...dc_heroes] //SPREAD METHOD
//console.log(all_new_heroes);//it will work as same as CONCAT method but it is better way and more used way

const another_array = [1,2,3,[4,5,6], 7, [6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)  //by using flat and infinity as a depth we spread the arrays and made a normal array out of the values 
//console.log(real_another_array);

console.log(Array.isArray("Hitesh")) //false
console.log(Array.from("Hitesh")); //from will convert it into array

console.log(Array.from({name: "Hitesh"}));  //empty array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


