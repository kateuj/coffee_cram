const drinkNames = ["Mocha", "Latte", "Americano"];
let drinkName = drinkNames[Math.floor(Math.random()*drinkNames.length)];

$( document ).ready(function() {
    $("#drink-random").text(`${drinkName}`);
});

$("#reset-button").click(function() {
    $("#drink-random").text("");
    $("#drink-random").text(`${drinkName}`);
});

// function ingredientClick () {
//     if ()
// }
// function (){
//     if (drinkName === "Mocha") {


// }
// };
$("#espresso-ingredient").click(function() {
    $("#coffee-cup").attr('src', 'assets/images/single_espresso.png');
});


// function showScore() {
//     document.getElementById("score").innerText = game.score;
// }
// $(document).ready(function($) {
//     $('#espresso-ingredient').on({
//       'click': function() {
//         $('#change-image').attr('src', 'https://cdn.shopify.com/s/files/1/0781/4423/files/02_8df18841-8d84-4a96-9611-e5a965dce73c.jpg?v=1568864598');
//       }
//     });
  
//     $('.yellow-button').on({
//       'click': function() {
//         $('#change-image').attr('src', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-flower-bouquet-1588610191.jpg');
//       }
//     });
//   });