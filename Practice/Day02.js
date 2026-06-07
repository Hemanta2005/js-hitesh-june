/*

name
age
college
branch

*/

/*const name = "Ripan"
let age = 18
const college = "AIIMS Kalyani"
const branch = "MBBS"

console.log(`Hello my name is ${name}, I am ${age} years old. I study in ${college} and my branch is ${branch}`);
*/


/*const Name = new String ("Hemanta")
console.log(Name.length)

console.log(Name.charAt(2))*/

/*const url = "https://google.com/hemanta%20patel"
console.log(url.replace('%20', '-'));
*/

/*console.log("5" + 1);

console.log("5" - 1);  // here it will always give 4 even if 5 is a string cause + has 2 jobs in js 
//adding numbers and adding stirngs but - has only one job and this is substraction of numbers 

console.log(true + 1);
console.log(false + 1);
console.log(null >= 0);
console.log(null > 0);



let score = "90"
console.log(typeof score);
let scoreU = Boolean(score)
console.log(typeof scoreU);*/


/*const student = {
    name: "Hemanta", 
    age : 20,
    city: "Kolkata"

}
student.branch = "CSE"

console.table([student.name, student.age, student.city, student.branch])

let a = 90
let b = a
b = 8
console.log(a);
console.log(b);


let obj1 = {
    name: "Hemanta"
}

let obj2 = obj1

obj2.name = "Rick"

console.log(obj1.name)
console.log(obj2.name)

*/

//STUDENT PROFILE GENERATOR

/*const student = {
    name: "Hemanta", 
    age: 20,
    college: "Swami Vivekanada Uni",
    branch: "CSE",
    gitubRepos: 67
}

console.table(student); 

console.log(student.name.length > 5);
console.log(student.name.toUpperCase());

const sentence = "JS is awesome"

console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.includes("Script"));
console.log(sentence.startsWith());
console.log(sentence.endsWith());

let score = "90"

console.log(typeof score)

let scoreNumber = Number(score)
console.log(typeof scoreNumber)

let scoreBoolean = Boolean(score)
console.log(typeof scoreBoolean)

let scoreString = String(scoreNumber)
console.log(typeof scoreString)*/

/*const bike = "KTM 390 Adventure"
console.log(bike.length);
console.log(bike.toUpperCase());
console.log(bike.toLowerCase());
console.log(bike.includes("390"));
console.log(bike.startsWith("KTM"));
console.log(bike.endsWith("Adventure"));
console.log(bike.replace("Adventure", "ADV"));
console.log(bike.split(" "));*/

/*const bike = "KTM 390 Adventure"

console.log(`Bike name: ${bike}`);
console.log(bike.length);
console.log(bike.charAt(0));
console.log(bike.charAt(16));
console.log(bike.includes("KTM"));
console.log(bike.includes("Yamaha"));
console.log(bike.toUpperCase());
console.log(bike.replace('Adventure', 'ADV'));*/

/*const student = "Hemanta"
console.log(`Original name is: ${student}`);
console.log(student.length);
console.log(student.toUpperCase());
console.log(student.toLowerCase());
console.log(student.charAt(0));
console.log(student.charAt(student.length-1));
console.log(student.includes("man"));
console.log(student.includes('xyz'));
console.log(student.replace("Hem", "Rip"));
console.log(student.split(""));*/


/*const password = "Hemanta123"
console.log(password);

console.log(password.length);
console.log(password.includes(Number));
console.log(password.includes("@"));
console.log(password.toUpperCase());
console.log(password.startsWith("Hem"));
console.log(password.endsWith("123"));


console.log("0" === 0)*/

const bike = "KTM 390 Adventure"
console.log(bike.length);
const parts = bike.split(" ")
console.log(parts[0]);
console.log(parts[1]);
console.log(parts[2]);
console.log(parts);




