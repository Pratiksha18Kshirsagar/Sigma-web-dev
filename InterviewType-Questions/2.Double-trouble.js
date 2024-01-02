
function doubleTheElement() {
    let arr = [1, 1, 2, 3, 3, 4, 5, 1, 2, 7 ,7 , 8];
    let double = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            const element = arr[i] * 2;
            double.push(element);
            i++;
        }
        else {
            const element = arr[i ] * 2;
            double.push(element);
        }
    }


    console.log(double);
}

doubleTheElement();