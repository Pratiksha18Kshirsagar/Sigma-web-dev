console.log("I hate Promises!!");
let a = new Promise((resolve, reject) => {
    let x = 0;
    if (x == 0) {
        resolve("ok");
    }
    else {
        reject("error");
    }
})

a.then(
    function (value) {
        console.log(value);
    },
    function (error) {
        console.log(error);
    } 
);
