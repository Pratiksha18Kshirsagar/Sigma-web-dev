 async  function getdata() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("pratiksha");
        }
            , 3500)
    }
    )
}
async function anyName(){
console.log("loading mode");
console.log("loading mode");
await getdata();
console.log(getdata());
console.log("Data has processed!!")
}
anyName()
// console.log(getdata());
// getdata().then((V) => {
//     console.log(getdata())

//     console.log("loading mode")
//     console.log("loading data") 
// // }
// // );


