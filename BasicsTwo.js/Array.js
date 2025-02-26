const myArr = [1, 2, 3, 4, 5]

console.log(myArr[0]);

const myArr2 = [1, 4, 6, 7]
console.log(myArr2[1]);

//Arrays Method

myArr.push(6)
myArr.pop()
myArr.unshift(2)
myArr.shift()
console.log(myArr.includes(6));
console.log(myArr.indexOf(3));

console.log(myArr2[1]);

console.log("B " , myArr);

const my_new_Array = myArr.slice(1,4);

console.log(my_new_Array);
console.log("B " , myArr);

const my_new_Array_2 = myArr.splice(1,4);

console.log(my_new_Array_2);
