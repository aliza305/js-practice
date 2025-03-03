//Imediately Invoked Function Expression (IIFE)

(function user(){         //named iife
    console.log(`DB CONNECTED`);
})()

( (name) => {          //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);

} ) ("Aliza")