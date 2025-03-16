//For

for (let index = 0; index <= 10; index++) {
    const element = index;
    console.log( element == 5 );
    
}

for (let i = 0; i <= 10; i++) {
    console.log(`outer loop value is: ${i}`);

   for (let j = 0; j <= 10; j++) {
    //console.log(`inner loop value is ${j} and inner loop ${i}`);
    console.log(i + '*' + j + '=' + i*j);

   }    
}
let myArray = ["spiderman" , "ironman" , "batman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
    
}

//Break and continue:

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        break
    }
    console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`)
        continue
    }
    console.log(`value of i is ${index}`);
    
}