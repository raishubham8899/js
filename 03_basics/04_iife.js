// Immediately Invoked Function Expressions (IIFE)

                         
(function chai(){                                              //unnamed iife
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                    //to write two iife this semicolon is must

( (name) => {                                                  //can be called as named iife 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

// to remove the pollution from global scope we use this iife

// ; must needed to end the iife
