//Business name generator

/*
adjectives->
Crazy
Amazing
Fires

Shop name
Engine
Food
Graments

Another word
bros
limited
hub

*/

var a = "Crazy";
var b = "Amazing";
var c = "Fires";

var d = "Engine";
var e = "Food";
var f = "Garments";

var g = "Bros";
var h = "limited";
var i = "hub";

function adjective(){
    var number = Math.floor((Math.random()*3)+1); //generates 1,2,3 number.
      if(number==1){
        return a;
      } 
      else if(number==2){
        return b;
      }
      else{
        return c;
      }
}

function ShopName(){
    var num = Math.floor((Math.random()*3)+1); //generates 1,2,3 number.
      if(num==1){
        return d;
      } 
      else if(num==2){
        return e;
      }
      else{
        return f;
      }
}
function anotherWord(){
    var word = Math.floor((Math.random()*3)+1); //generates 1,2,3 number.
      if(word==1){
        return g;
      } 
      else if(word==2){
        return h;
      }
      else{
        return i;
      }
}

console.log(adjective() + ShopName() + anotherWord()); 


