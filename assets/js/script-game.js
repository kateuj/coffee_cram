// //Score and Order Count
// let playerScore = 0;
// let orderCount = 0;

// //New game reset counts
// function newGame() {
//     orderCount = 0;
//     playerScore = 0;
// };

var drinkNames = ['Mocha', 'Latte', 'Americano', 'Flat White', 'Single Espresso', 'Double Espresso', 'Cappuccino'];
var drinkName = drinkNames[Math.floor(Math.random()*drinkNames.length)];

const espresso = document.querySelector('#espresso-ingredient');
const doubleEspresso = document.querySelector('#double-espresso-ingredient');
const steamedMilk = document.querySelector('#milk-ingredient');
const chocolate = document.querySelector('#chocolate-ingredient');
const water = document.querySelector('#water-ingredient');

var divScore = document.querySelector("#player-score");
var divOrderCount = document.querySelector("#order-count");

var playerScore = divScore.textContent * 1 + 10;
var orderCount = divOrderCount.textContent * 1 + 1;

let americano = 'double espresso, water';
let latte = 'double espresso, milk';
let mocha = 'double espresso, chocolate, milk';
let flatWhite = 'double espresso, milk';
let cappuccino = 'espresso, milk, foam';

//If player gets correct answer, runs below function
function playerWin() {

    divScore.textContent = playerScore;
    divOrderCount.textContent = orderCount;
    setTimeout(function(){
        alert('Well done!');
        userString = '';
        location.reload('#drink-random');
        //timer reset
    },1000);
};

//add loop for 10 goes to restart with alert and text with score on

// Drink name generation
$(document).ready(function() {
    $('#drink-random').text(`${drinkName}`);
});

// Empty string generated for user ingredient clicks to make an ingredient list to check against the variable strings of each drink's mock up.
let userString = '';

// Click functions with if statements for each ingredient in the drawer. Each triggers the coffee cup image to change to reflect the user's choices or resets the level for incorrect answers.
$('#espresso-ingredient').click(function() {
    userString += 'espresso';
    if (drinkName == 'Single Espresso' && userString == 'espresso') {
        $('#coffee-cup').attr('src', 'assets/images/single-espresso-cup.webp');
        playerWin();
    } else if (drinkName == 'Cappuccino' && userString == 'espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.webp');
    } else {
        alert('Oops! Start again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$('#water-ingredient').click(function() {
    userString += ', water';
    if (drinkName == 'Americano' && userString == americano) {
        $('#coffee-cup').attr('src', 'assets/images/americano.webp');
        playerWin();
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$('#chocolate-ingredient').click(function() {
    userString += ', chocolate';
    if (drinkName == 'Mocha' && userString == 'double espresso, chocolate') {
        $('#coffee-cup').attr('src', 'assets/images/chocolate-cup.webp');
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$('#milk-ingredient').click(function() {
    userString += ', milk';
    if (drinkName == 'Latte' && userString == latte) {
        $('#coffee-cup').attr('src', 'assets/images/latte.webp');
        playerWin();
    } else if (drinkName == 'Cappuccino' && userString == 'espresso, milk') {
        $('#coffee-cup').attr('src', 'assets/images/milk-and-coffee.webp');
    } else if (drinkName == 'Mocha' && userString == mocha) {
        $('#coffee-cup').attr('src', 'assets/images/mocha.webp');
        setTimeout(function(){
            alert('Well done!');
        },1000);
        setTimeout(function(){
            userString = '';
            location.reload('#drink-random');
        },1000);
        playerWin();
    } else if (drinkName == 'Flat White' && userString == flatWhite) {
        $('#coffee-cup').attr('src', 'assets/images/latte.webp');
        playerWin();
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$('#double-espresso-ingredient').click(function() {
    userString += 'double espresso';
    if (drinkName == 'Americano' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.webp');
    } else if (drinkName == 'Flat White' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.webp');
    } else if (drinkName == 'Latte' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.webp');
    } else if (drinkName == 'Mocha' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.webp');
    } else if (drinkName == 'Double Espresso' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/double-espresso-cup.webp');
        playerWin();
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$('#foam-ingredient').click(function() {
    userString += ', foam';
    if (drinkName == 'Cappuccino' && userString == cappuccino) {
        $('#coffee-cup').attr('src', 'assets/images/cappuccino.webp');
        playerWin();
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});


// Timer countdown for each question
setInterval(function () {
    var div = document.querySelector("#timer");
    var count = div.textContent * 1 - 1;
    div.textContent = count;
    if (count <= 0) {
        location.reload('#drink-random');
        // counter -15
    }
  }, 1000);

//   updateScore(function () {
//     var divScore = document.querySelector("#player-score");
//     playerScore+=10;
//     divScore.textContent = playerScore;

// });



// // Score
// setScore(function () {
//     var divScore = document.querySelector("#score");
//     totalScore = divScore.textContent * 1 + 10;
//     div.textContent = score;
//     if ()
//     $('#score').text(`${totalScore}`);
// };
// // Order count


// Reset game
$('#reset-button').click(function() {
    location.reload('#drink-random');
});