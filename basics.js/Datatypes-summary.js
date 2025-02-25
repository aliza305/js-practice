//Javascript is a dynamical language not a static language.
// primitive data types:

//7 number of primitive data type: Null,string,boolean,number,undefined,symbol,bigInt:

const score = 100
const scoreValue = 100.3 //Number

const  isLoggedIn = false //boolean
const  outsidetemp = null // null

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

const bignumber = 23563231321334n//bigint


//Non- primitive data type:

//3 number of non-primitive data type: Array,objects,functions:

const heros = ["spiderman", "superman", "ironman"] //Array

let myObj = {
    
    name : "Aliza",
    age : 19,

}

const myFunction = function(){
    console.log("Hello world")
}


/*Two types of memory 
1: stack memory used in primitive datatypes
2: Heak memory used in heak datatypes*/