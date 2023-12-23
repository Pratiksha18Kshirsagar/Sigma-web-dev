async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}


//immediately invoked function!!🤣🤣🤣🤣

(async function main() {
    // let a = await sleep()
    // console.log(a)

    //DESTRUCTURING
    let [x, y] = [2, 3, 3, 4]
    console.log(x, y)

    // let [a, b, ...rest] = [2, 4, 5, 6, 7, 8, 9];
    // console.log(a, b, rest);


    let obj = {
        a: 1,
        b: 2
    }

    let { a, b } = obj
    console.log(a, b);
})()



function sum(a, b, c) {
    return a + b + c;
}

//spread - it spreads the array into object!!
let arr = [3,4,5];
console.log(sum(...arr));
