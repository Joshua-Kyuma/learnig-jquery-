// $("h1").text("goodbye");
//
// $("button").html("hfhlff")

// $("a").attr("href", "https://www.yahoo.com");
//
// console.log($("h1").attr("class"));

//event Listener//
// $("h1").click(function(){
//   $("h1").css("color", "brown");
// })

// for(i=0; i<5; i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     document.querySelector("h1").style.color = "brown";
//   });
// }

// $("button").click(function(){
//   $("h1").css("color", "red");
// });
//
// $("input").keypress(function(event){
//   console.log(event.key);
// });

// $(document).keypress(function(event){
//   $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//   $("h1").css("color", "red");
// });
//
// $("h1").on("mouseout", function(){
//   $("h1").css("color", "purple");
// });

$("button").on("click", function(){
  $("h1").slideUp().slideDown().animate({opacity: 0.5});
});
