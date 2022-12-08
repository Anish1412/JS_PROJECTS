var z;
var x = setTimeout(function(){
document.getElementById("demo").innerHTML = "<h1>Guess a number in your mind!!</h1>";
},2000);

var y = setTimeout(function(){
document.getElementById("demo").innerHTML = "<h1>Okk!! Now double that number in your mind!!</h1>";
},7000);

var x = setTimeout(function(){
z = Math.floor(Math.random()*100);
if(z%2==0){
document.getElementById("demo").innerHTML = "<h1>Now add that number by "+z+"!!</h1>";
}
else{
z += 1;
document.getElementById("demo").innerHTML = "<h1>Now add that number by "+z+"!!</h1>";
}
},12000);

var a = setTimeout(function(){
document.getElementById("demo").innerHTML = "<h1>Make Half of that number or Divide that number by 2!!</h1>";
},22000);

var b = setTimeout(function(){
document.getElementById("demo").innerHTML = "<h1>Now subtract that number by that number which you first predicted in your mind!!</h1>";
},32000);

var c = setTimeout(function(){
var d = z/2;
document.getElementById("demo").innerHTML = "<h1>Your Answer is = "+d+ "!!😅</h1>";
},42000);