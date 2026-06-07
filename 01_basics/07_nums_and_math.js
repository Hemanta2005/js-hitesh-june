const score = 400

const balance = new Number (100)
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toFixed(2));  //Decimal ke baad sirf 2nd number tak dikhayega like 458.89

const otherNum = 23.567346783
//console.log(otherNum.toPrecision(3));



const hundreds = 1000000
//console.log(hundreds.toLocaleString()); //1,000,000 comas laga dega


//+++++++++ MATHS ++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // - turns +
console.log(Math.round(4.689)); //round off
console.log(Math.ceil(4.86));  //upper value
console.log(Math.floor(4.86));  //lower value

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20


console.log(Math.floor(Math.random() * (max - min + 1)) + min)