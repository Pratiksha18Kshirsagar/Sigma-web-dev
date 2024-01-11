 async  function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pratiksha");
        }
            , 3500)
    }
    )
}

let a;
async function anyName(){
console.log("loading mode");
console.log("loading mode");
 a = await getdata();
console.log(a);
console.log("Data has processed!!")
}
 anyName()
// console.log(getdata());
// getdata().then((V) => {
//     console.log(getdata())

//     console.log("loading mode")
//     console.log("loading data") 
// }
// );


