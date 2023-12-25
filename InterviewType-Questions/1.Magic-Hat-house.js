let students = ["girish", "pratiksha", "Kailash", "Aditya", "Abhishek", "Vaishnavi",
    "Ananya", "Sona", "Akshay", "Rahul", "Krishna", "Monu", "preeti", "Pratap", "pratik", "Pratyusha", "Pratima", "Krishnapraneet", "Harshavardhana", "ShriVijayaLaxmi", "ShankarRao"];

let Red = [];
let Blue = [];
let Yellow = [];
let Green = [];

for (const student of students) {
    if (student.length < 6) {
        Red.push(student);
    }
    else if (student.length < 8) {
        Blue.push(student);
    }
    else if (student.length <= 12) {
        Yellow.push(student);
    }
    else {
        Green.push(student);
    }

}
console.log("The RED group students are : ", Red);
console.log("The BLUE group students are : ", Blue);
console.log("The YELLOW group students are : ", Yellow);
console.log("The GREEN group students are : ", Green);
