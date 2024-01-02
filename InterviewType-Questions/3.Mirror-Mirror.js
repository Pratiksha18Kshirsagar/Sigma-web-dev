let name = 'Pratiksha'
let arr = [];
function reverseString(){
    for(let i = name.length-1 ; i >= 0 ; i--){
        // console.log(name[i]);
        arr.push(name[i]);
    }
    let reverse = arr.join("");
    console.log(name ,reverse);
    
}

reverseString();  
  