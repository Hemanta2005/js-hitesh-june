//for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
    
    
}

const greetings = 'Hello world'
for (const greet of greetings) {
    //console.log(`Each character is: ${greet}`);
    
    
}



//Maps 

const map = new Map()
map.set('IN', "India")
map.set('USA', "Usited States of America")
map.set('FR', "France")

//console.log(map);
//Notes for maps:
//(1) the firsst value "IN" is set to be key and "India" is set to be key value 
//(2) If we add same key and value for more than once we can't get any output cause maps work on unique 
//values so we can use one value only once 
// (3) It is like objects 

//Using forof loop on this map
for (const [key, value] of map) {
    //console.log(key, ':-', value);  
}

const myObject = {
    'game1' : 'NFS', 
    'game2' : 'Silent Hill 2',
    'game3' : 'RDR 2'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
    
// }    //This is not possible cause myObject is not itterable

