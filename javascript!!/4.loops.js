console.log("Hii I am loops!!");

//Girish told loops are used for ITERATIONS as he does iritations to me !!

// For loop!!
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

// For in loop!!
let pip = {
    Name: "Pratiksha",
    Branch: "CSE",
    University: "VTU"
}

for (const k in pip) {
    const element = pip[k];
    console.log(k, element);
}

//For off!!
for (const pop of "Pratiksha") {
    console.log(pop);
    
}

//While loop!!
let i = 0;
while (i<10) {
    console.log(i);
    i++;
}

//Do while loops!!
let a = 10;
do {
    console.log(a);
    a++;
} while (a<15);


// let r = "Pratiksha   pradeep kshirsagar";
// for (const key in r) {
    
//         const element = r[key];
//         console.log(key);
//     }


