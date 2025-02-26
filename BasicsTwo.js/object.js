//Singleton
//OBJECTS LITERALS

const JsUser = {
      name: "Aliza",
      age: "19",
      location: "Lahore",
      email: "aliza@gmail.com",
      isLoggedIn: "false",
      lastLoggedInDays: ["Monday", "wednesday"]

}

console.log(JsUser.name);

JsUser.email = "aliza@youtube.com"
Object.freeze(JsUser)
console.log(JsUser);

JsUser.greeting = function(){
      console.log("Hello World");
}
JsUser.greetingTwo = function(){
      console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());