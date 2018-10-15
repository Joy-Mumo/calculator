
function calculate() {
   var a = parseInt(document.getElementById("firstValue").value);
  var b =parseInt(document.getElementById("secondValue").value);
  var result = add(a,b);
  $("#display").text(result);
  
  return result;
}
 
var add=function(a,b){
  return a+b;
};


function operate() {
  var a = parseInt(document.getElementById("firstValue").value);
 var b =parseInt(document.getElementById("secondValue").value);
 var result = subtract(a,b);
 $("#display").text(result);
 
 return result;
}

var subtract=function(a,b){
 return a-b;
};


function perform() {
  var a = parseInt(document.getElementById("firstValue").value);
 var b =parseInt(document.getElementById("secondValue").value);
 var result = multiply(a,b);
 $("#display").text(result);
 
 return result;
}

var multiply=function(a,b){
 return a*b;
};


function attack() {
  var a = parseInt(document.getElementById("firstValue").value);
 var b =parseInt(document.getElementById("secondValue").value);
 var result = divide(a,b);
 $("#display").text(result);
 
 return result;
}

var divide=function(a,b){
 return a/b;
};



