console.log("A");
console.log("L");
console.log("I");
console.log("Z");
console.log("A");

function SayMyName(){

    console.log("A");
    console.log("L");
    console.log("I");
    console.log("Z");
    console.log("A");
}

SayMyName()

function addTwoNumbers(number1,number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(4,7)
console.log("result: " , result);


function logInUser(username){
    return `${username} just logged in`

}

console.log(logInUser("Aliza"))

function  calculatecartprice(...num1){                   //(...)rest operator
    return num1               

}

console.log(calculatecartprice(300,500,900));

const user = {
    username: "Aliza",
    price: "1900",
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}

handleObject(user)

const newArray = [200, 300, 400]

function returnsecoundvalue(getArray){
    return getArray[1]
}
console.log(returnsecoundvalue(newArray));
console.log(returnsecoundvalue([200]));