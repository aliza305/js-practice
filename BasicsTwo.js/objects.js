const user = new Object()    //singleton object

const user2 = {}       //non-singleton object

user.id = "1243acd"
user.name = "liza"
user.age = "19"

console.log(user);

const regularUser = {
    email: "liza@gmail.com",
    fullname: {
        userfullname: {
            firstname: "liza",
            lastname: "kashif"
        }
    }
}

console.log(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {3: "c", 4: "d"}


//const obj3 = {obj1,obj2}
//const obj4 = Object.assign({},obj1,obj2,obj3)
const obj4 = {...obj1, ...obj2}
console.log(obj4);

const users = [
    {
        id: 1,
        email: "a@gmail.com"
    },
]

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));


const course = {
    coursename: "urdu",
    courseprice: "988",
    courseinstrustor: "amna"
}

const {courseinstrustor: instructor} = course

console.log(instructor);


