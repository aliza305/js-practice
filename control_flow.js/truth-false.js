const userEmail = "aliza@gmail.com"
//const userEmail = ""
//const userEmail = []

if(userEmail){
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

//Falsy values

//false, 0 , -0, BigInt, 0n, "", null, undefined, NaN

//Truthy values

//"0", 'false', "", [] , {} , function(){}

const emptyobj = {}

if(Object.keys(emptyobj).length === 0){
    console.log("object is empty");
  
}

//Nullisng coelescing operator (??): null undefined

let value1;
//value1 = 5 ?? 10
//value1 = null ?? 10
//value1 = undefined ?? 10
//value1 = null ? 10 ? 20




console.log(value1);

// Terniary operator

//condition ? true : false

const iceTeaPrice = 200
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")