// function myFunction() {
//   var x = document.getElementById("formDiv");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
//
// }

$('.message a').click(function(){
  $('form').animate({height: "toggle", opacity: "toggle"}, "slow")
});
