//var c = 300
let a = 300

if(true){
    let a = 10
    const b = 20   //Anything inside this block is  called block scope and anything out of this is global scope
    //console.log(a);
    
    
}

//console.log(a);
//console.log(b);
//console.log(c);


//PART 2: SCOPES

function one(){
    const username = 'Hemanta'

    function two(){
        const website = 'youtube';
        console.log(username);
        
    }
    //console.log(website);
    //two()
}
//one()

//IF-ELSE scopes

if (true){

    const username = 'hemanta'
    if (username == 'hemanta'){
        const website = 'youtube'
        //console.log(username + website);
        
    }
    //console.log(username);
    

}

//console.log(username);


//+++++ intresting ++++++

addone(5)
function addone(num){

    return num + 1    //FUNCTION

}


addtwo(5)
const addtwo = function(num){
    return num + 2            //EXPRESSION 
}

//If we call the function before declaring it we can get output 
//But when we do the same for expression we dont get any output

