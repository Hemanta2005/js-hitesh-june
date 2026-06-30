/*const bike = {}
bike.brand = 'KTM'; 
bike.name = 'ADV 390'
bike.price = '380000'

console.log(bike);

const player  ={}
player.name = 'Hemanta'
player.sport = 'Cricket'
player.city = 'Kolkata'
player.age = 20  
console.log(player)

const student = {
    fullname:{
        firstname: 'Hemanta', 
        lastname: 'Biswas'
    }
}
console.log(student.fullname.firstname);
console.log(student.fullname.lastname);

const team = {
    details: {
        captain: 'Josh',
        city: 'Adilede',
        players: 11,
    }
}

console.log(team.details.captain);

const obj1 = {
    name: 'Hemanta'
}

const obj2 = {
    sport: 'Cricket'
}

const obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);

const obj4 = {...obj1, ...obj2};
console.log(obj4);


const players = [
    {
        name: 'Kohli',  
        sport: 'Cricket'

    }, 
    {
        name: 'Messi',
        sport: 'Football'
    }
]
console.log(players[1].sport);

const sportsperson  = [ 
    {
        name: 'Dhoni',
        sport: 'Cricket'

    }, 
    {
        name: 'Pele',
        sport: 'Football'
    },
    {
        name: 'Max Verstappen', 
        sport: 'F1'
    }
]
console.log(sportsperson[1].name);

const user = {
    id: 1,
    name: 'Hemanta',
    city: 'Kolkata'
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(Object.hasOwnProperty('City'));
console.log(Object.hasOwnProperty('Age')); */

const team = {
    teamName: 'Kolkata Knight Riders',
    captain: 'Hardik Pandiya',
    city: 'Kolkata',
    players: [
        {
            p1: 'Sunil narine'
        },
        {
            p2: 'Fin Allen'
        },
        {
            p3: 'Harshit Rana'
        },
        {
            p4: 'Cameron Green'
        }
    ]
}
console.log(team.teamName);
console.log(team.captain);
console.log(team.players[2].p3);
console.log(Object.keys('team'));
console.log(Object.values('team'));
console.log(Object.entries('team'));
console.log(Object.hasOwnProperty("captain"));

