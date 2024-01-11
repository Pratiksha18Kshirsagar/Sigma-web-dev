let str = 'PratikshaKshirsagarAIOU';
let count = 0;

// function countVowels(){
//     for (const i of str) {
//         if(i == 'a'){
//             count = count+1
//         }
//         else if(i == 'A'){
//             count++;
//         }
//         else if(i == 'E'){
//             count++;
//         }
//         else if(i == 'e'){
//             count++;
//         }
//         else if(i == 'I'){
//             count++;
//         }
//         else if(i == 'i'){
//             count++;
//         }
//         else if(i == 'O'){
//             count++;
//         }
//         else if(i == 'o'){
//             count++;
//         }
//         else if(i == 'u'){
//             count++;
//         }
//         else if(i == 'U'){
//             count++;
//         }    
//     }
//     console.log(count);
// }

let vowels = 'aeiouAEIOU';
function countVowels() {
    for (const i of str) {
        if (vowels.includes(i)) {
            count++
        }
    }
    console.log(count);
}
countVowels();