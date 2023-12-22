let a = 3
let b = 2


let sum = parseInt(a) + parseInt(b);
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("sorry!!");

}
console.log("The sum is : ", sum);


function main() {
    try {
        return console.log(sum * x);
    } catch (error) {
        console.log(error.name);   //optional understanding!!
      return  console.log("Sorry HANDU error aa gaya!!");
    }

    //Finally works in the function , even after return ..
    finally {
        console.log("Sab hogaya!!");
    }
}

main();