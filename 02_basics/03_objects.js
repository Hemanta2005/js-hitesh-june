// singleton 
//Object.create constructor method isimein sngleton banta hain



// object literals 


const mySym = Symbol("key1")

const JsUser = {
    name: 'Hemanta',
    "full name" : "Hemanta Biswas",
    [mySym] : "mykey1",
    age : 20,
    location: 'kolkata',
    email: "heman@gmail.com",
    isLoggedIn : false,
    lastLogginDays: ['Mon', 'Sat']

}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser [mySym]);

JsUser.email = "hemchjtr@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "fejejnferrfnio@gmail.com"
console.log(JsUser["email"]);





JsUser.greeting = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
