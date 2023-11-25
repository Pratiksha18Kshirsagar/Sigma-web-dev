function faultyCalc(a,b){
    var wrong = Math.random()*50;
    wrong = Math.floor(wrong)+1;
    if(wrong<10){
    console.log("The sum is" ,a-b );
    console.log("The minus is" ,a/b );
    console.log("The mul is" ,a+b );
    console.log("The div is" ,a**b );
    console.log("The expo is" ,a-b );
}
else{
    console.log("The sum is" ,a+b );
    console.log("The minus is" ,a-b );
    console.log("The mul is" ,a*b );
    console.log("The div is" ,a/b );
    console.log("The expo is" ,a**b );
}

}
faultyCalc(100,100);