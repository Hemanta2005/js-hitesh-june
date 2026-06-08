//Dates

let myDate = new Date()
console.log(myDate.toString()); //Converts date to a readable string including day, date, time and timezone
console.log(myDate.toDateString()); //Converts date to a readable string showing only day, month, date and year
console.log(myDate.toISOString()); //Returns date and time in ISO 8601 format (UTC timezone)
console.log(myDate.toJSON()); //Returns date as a JSON-compatible ISO string (same as ISOString in most cases)
console.log(myDate.toLocaleDateString());//Returns only the date formated according to the user's local region settings 
console.log(myDate.toLocaleString());//Returns both date and time formatted according to the user's local region settings 

let myCreatedDate = new Date(2023, 0, 23,)
console.log((myCreatedDate.toDateString()));

//Time Stamps
let myTimeStamp = Date.now()
//console.log(myTimeStamp);
//console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: 'long',
    
})
