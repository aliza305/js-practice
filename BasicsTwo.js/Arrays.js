const heros = ["thor" , "ironman" , "spiderman"]
const girl_names = ["Liza" , "areeba" , "saira"]

heros.push(girl_names)     //push method

console.log(heros);
console.log(heros[3][1]);

const newArry = heros.concat(girl_names)   //concatination
console.log(newArry);

const new_Arry = [...heros, ...girl_names]    //spread operators 
console.log(new_Arry);

const another_array = [1, 2, 3, [4, 5 ,6], 7, 8, [5, 3, [4, 6, 7]]]
const new_another_array = another_array.flat(Infinity)                 //flat array method
console.log(new_another_array);


console.log(Array.isArray("Aliza"));
console.log(Array.from("Aliza"));
