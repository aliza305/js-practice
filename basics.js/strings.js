const name = "Aliza"
const age = 19

//console.log (name + age);

console.log(`Hello my name is ${name} and my age is ${age}`);

const gameName = new String('Aliza')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('a'));

const newstring = gameName.substring(0,3)
console.log(newstring);

const anoterString = gameName.slice(1,4)
console.log(anoterString);


const anoterStringOne = "          Aliza         "
console.log(anoterStringOne);
console.log(anoterStringOne.trim());

const url = "http://youtube.com@javascript"

console.log(url.replace('@' , '-'));