// IF Statement

const temperature = 41

if( temperature === 40 ) {
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

const score = 200

if( score > 100 ) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

console.log(`User power: ${power}`);

const balance = 1000

if( balance < 50 ) {
    console.log("less than");
} else if( balance < 750 ) {
    console.log("less than 750");
} else if( balance < 900 ) {
    console.log("less than 750");
}

const UserLoggedIn = true
const debitcard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if( UserLoggedIn && debitcard && 2==3 ){
    console.log("Allow to buy courses");
}

if( LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User logged in");
}