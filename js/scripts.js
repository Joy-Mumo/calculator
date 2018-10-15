// var grade=parseInt(prompt("enter exam percentage"));
// if(grade==0)
// alert("not applicable")
// else if(grade>=80 )/* || grade <=100) */
// alert ("A")

// else if(grade>=60) /* || grade <=79) */
// alert ("B")

// else if(grade>=40 )
// alert ("C")
// else if(grade>=20) /* || grade <=39) */
// alert ("D")
// else if(grade>=1)
// alert ("E")
$(document).ready(function() {
    $("button#add").click(function() {
    $("p").text("Javascript is a language that enables interaction with the web.");
  });
  $("button#subtract").click(function() {
  $("p").text("The actions taken on an element,usually depicted next to a parenthesis.");
});
$("button#multiply").click(function() {
$("p").text("A function is a procedure taken on an element.");
});
$("button#divide").click(function() {
$("p").text("jQuery is a single javascript file with in-built codes to help programmers build a cleaner web.");
});
$("button#reminder").click(function() {
$("p").text("Alert is a function that brings a pop up box.");
});

});

// $("form#new-contat").submit(function(event) {
//     event.preventDefault();

//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();
//     var newContact = new Contact(inputtedFirstName, inputtedLastName);
