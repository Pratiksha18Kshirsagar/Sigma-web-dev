var arr = [1, 2, 5, 6];
// console.log(arr);
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

// arr[0] = 100;
// console.log(arr[0]);
// console.log(arr);

console.log(arr.toString());
console.log(arr.join("-"));

// pop and push works from end!!

console.log(arr.pop());
console.log(arr);

console.log(arr.push(500));
console.log(arr);

// shift and unshift works from th beginning!!

console.log(arr.shift());
console.log(arr);
console.log(arr.unshift("jack"));
console.log(arr);

// console.log(delete(arr[0]));
// console.log(arr);
// console.log(arr[0]);


// var a = [1 , 2, 3];
// var b = [4,5,6];
// var c = [7,8,9];
// console.log(a.concat(b ,c ));

var d = [30 , 10 , 20 , 1];
console.log(d.sort());
console.log(d.splice(1,2 , 888 , 999));
console.log(d);



//loops in Arrays!!

 var a = [20, 93, 88, 57];

// for (let index = 0; index < a.length; index++) {
//     console.log(a[index]);
// }



a.forEach((element , index ,value)=> {
    console.log(element , index ,value);
});




// let obj  = {
//     a:1,
//     b:2,
//     c:3,
//     d:4,

// }
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key,element);

//     }
// }

//MAP!!....

// var p = [20 , 30, 40 , 50, 60];
// let newarr = p.map((e)=>{
// return e**2;
// })
// console.log(newarr);

// const numbers = [1, 2, 3, 4, 5];

// const squareNumbers = numbers.map(number => {
//   return number * number;
// });

// console.log(squareNumbers);


//FILTER!!....

// let k = [3 , 8 , 9 , 1 , 5, 0 ];
// function greaterThanFive(e){
// if(e>5){
//     return true;
// }
// return false;
// }
// console.log(k.filter(greaterThanFive));

// const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

// const onlyNumbers = things.filter(thing => {
//   return typeof thing === 'number';
// });

// console.log(onlyNumbers);


// //REDUCE!!
// let q = [1,2,3,4,5,6];
// function reduced(a,b){
// return a+b;
// }
// console.log(q.reduce(reduced));


// const newNumbers = [1, 3, 5, 7];

// const newSum = newNumbers.reduce((accumulator , currentValue)=>{
// console.log('The value of accumulator: ', accumulator);
// console.log('The value of currentValue: ', currentValue);
// return accumulator + currentValue;
// },10)
// console.log(newSum);

// //findIndex
// const jumbledNums = [123, 25, 78, 5, 9]; 

// const lessThanTen = jumbledNums.findIndex(num => {
//   return num < 10;
// });


// const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

// const foundAnimal = animals.findIndex(i=>{
//   return i == 'elephant';
// })

// const startsWithS = animals.findIndex(i=>{
//   return i[0] == 's'
// })




// var word1 = ["pratiksha", "kshirsagar"];
// var word2 = ["pratiksha", "kshirsagar"];
// var arrayStringsAreEqual = function (word1, word2) {

//     const str1 = word1.join('');
//     const str2 = word2.join('');
//     return str1 === str2;

// };
// console.log(arrayStringsAreEqual(word1,word2));


