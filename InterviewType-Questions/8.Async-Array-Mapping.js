let arr = [2,3,4,5,6];

 async function multiplier(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve( arr.map(num =>{
            return num*2;
         }))
    }, 5000);
  })
}


async function dabba(){
 let a = await multiplier();
 console.log(a);
}

dabba();