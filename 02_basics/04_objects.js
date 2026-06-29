//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "324678v"
tinderUser.name = "Sammy"
tinderUser.loggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "437834@gmail.com",
    fullname:{
        userfullname: {
            firstname: 'Hemanta',
            lastname: 'Biswas',
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

//Combining objects

const obj1 = {1:'a', 2:'b'}
const obj2 = {3: 'a', 4: 'b'}

//const obj3  =Object.assign({}, obj1, obj2)
//We can write the past line without empty {} but including it ia better practice
//Giving the {} will give it an empty object as a target and other obj1 and obj2 
//will be SOURCE  
//console.log(obj3);

const obj3 = {...obj1, ...obj2}
console.log(obj3)

//to add objects there are two methods: 1)Assign method using {} (2) Spread method like array using ...

const users = [
    {
        id: 1, 
        email: "fej@"
    }, 

    {
        id: 2, 
        email: "ferbjh@"
    }
]


console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('loggedIn'));

