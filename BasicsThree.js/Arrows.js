const user = {
    username: "Aliza",
    price: 999,

    welcomeMassege: function(){
        console.log(`${this.username} , welcome to massege `);
        console.log(this);
    }
}

user.welcomeMassege()
user.username = "Liza"
user.welcomeMassege()


const chai = () => {
    let username = "aliza"
    console.log(this);
}
chai()

const addtwo = (num1 , num2) => {
    return num1 + num2
}

console.log(addtwo(3 , 4));

const myArray = [2, 4 , 6, 4, 8]
myArray.forEach(() => {})                //arrow function