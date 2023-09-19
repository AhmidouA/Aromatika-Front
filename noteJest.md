// init Jest
// -D =  dep depencies
// le D permet de pas de ne pas builder les test quand on build notre app

etape 1
npm i -D jest



etape 2
package.json
    => script: {
        test: "jest"
    }




// ficher sum.js back
function sum(a+b){
    return a+b
};
module.export = sum


// exemple de test back
const sum = require ("./sum")

describe(
    "test sum", () => {
        test("test 1 + 2 = 3", () => {
            expect(sum(1,2)).toBe(3)
        })
        test("test -1 + -2 = -3", () => {
            expect(sum(1,2)).toBe(3)
        })
        test("test -1 + -2 = -4", () => {
            expect(sum(1,2)).toBe(3)
        })
    }
)


// resultat terminal
npm run test

PASS ./sum.test.js (le nom du ficher des test)
test sum 
    v test 1 + 2 = 3   (5ms)
    v test -1 + -2 = -3  (1ms)
    x test -1 + -2 = -4  (2ms)

    * test sum > test -1 + -2 = -4 

    expected(received).toBe(expected) // Object.is equality

    Expected -4
    Received -3