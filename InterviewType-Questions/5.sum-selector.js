let arr = [1, 2, 3, 4, -5, 6, 7, 8];
let sum = 0;
let newArr = [];

function sumSelector() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            break;
        }
        sum = sum + arr[i];
    }
    console.log(sum);
}

sumSelector();

