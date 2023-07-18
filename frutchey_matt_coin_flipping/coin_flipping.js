// Refactored function to do a basic coin toss:
const tossCoin = () => {
    return Math.random() > 0.5 ? "heads" : "tails"
}
// console.log(tossCoin()) //* Works!

// Now, we want to use this in another function and see how long it takes to get "heads" five times in a row.

// const fiveHeadsSync = () => {
//     let headsCount = 0;
//     let attempts = 0;
//     while(headsCount < 5) {
//         attempts++;
//         let result = tossCoin();
//         console.log(`The coin landed on ${result}!`);
//         if (result === "heads") {
//             headsCount++;
//         } else {
//             headsCount = 0; // Resets the process back to 0.
//         }
//     }
//     return `It took ${attempts} attempts to get this coin to land on "heads" five times in a row.`
// }
// console.log( fiveHeadsSync() );
// console.log( "This is run after the fiveHeadsSync function completes" );

// Now, rewrite the above function using Promises.
// Make sure your fiveHeads function will call the resolve function when the coin has flipped "heads" five times in a row.

const fiveHeads = () => {
    return new Promise(( resolve, reject ) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5 && attempts <= 100) {
            attempts++;
            let result = tossCoin();
            console.log(`The coin landed on ${result}!`);
            if (result === 'heads') {
                headsCount++;
            } else {
                headsCount = 0;
            }
        }
        if (attempts <= 100) {
            resolve(`It took ${attempts} attempts to get this coin to land on 'heads' five times in a row.`)
        } else {
            reject("It has taken at least 100 attempts to try to get five 'heads' in a row. Please try again.")
        }
    });
}
fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log("When does this run now?")