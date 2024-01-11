const drinkNames = ['Mocha', 'Latte', 'Americano', 'Flat White', 'Single Espresso', 'Double Espresso', 'Cappuccino'];
// let shuffledArray = drinkNames.sort((a, b) => 0.5 - Math.random());

function getDrinkName() {
    return drinkNames[Math.floor(Math.random()*drinkNames.length)];
    
};

let drinkName = getDrinkName();

// let i = 

// for (let i = 0; i < shuffledArray.length; i++) {
//     console.log(shuffledArray[i]);

// };

// function myFunction() {
//     document.getElementById("drink-random").innerHTML = drinkNameIndex;
//   };

const espresso = document.querySelector('#espresso-ingredient');
const doubleEspresso = document.querySelector('#double-espresso-ingredient');
const steamedMilk = document.querySelector('#milk-ingredient');
const chocolate = document.querySelector('#chocolate-ingredient');
const water = document.querySelector('#water-ingredient');

let divScore = document.querySelector("#player-score");
let divOrderCount = document.querySelector("#order-count");

let americano = 'double espresso, water';
let latte = 'double espresso, milk';
let mocha = 'double espresso, chocolate, milk';
let flatWhite = 'double espresso, milk';
let cappuccino = 'espresso, milk, foam';

//add loop for 10 goes to restart with alert and text with score on

// Drink name generation
$(document).ready(function () {
    $('#drink-random').text(`${drinkName}`);
});

// Empty string generated for user ingredient clicks to make an ingredient list to check against the variable strings of each drink's mock up.
let userString = '';

let playerScore = 0;
let orderCount = 0;
let timeRunOut = 0;

function increasePlayerScore() {
    playerScore+=10;
    $('#player-score').text(`${playerScore}`);
};

function increaseOrderCount() {
    orderCount++;
    $('#order-count').text(`${orderCount}`);
};
// let playerScore = divScore.textContent * 1 + 10;
// let orderCount = divOrderCount.textContent * 1 + 1;
// let timeRunOut = divScore.textContent * 1 - 5;

//If player gets correct answer, runs below function
function playerWin() {
    setTimeout(function(){
        increasePlayerScore();
        increaseOrderCount();
        alert('Well done!');
        userString = '';
        drinkName = getDrinkName();
        $('#drink-random').text(`${drinkName}`);
        $('#timer').text(`15`);
    },1000);
};

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
        playerWin();
    } else if (drinkName == 'Flat White' && userString == flatWhite) {
        $('#coffee-cup').attr('src', 'assets/images/flat-white.webp');
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
    let div = document.querySelector("#timer");
    let count = div.textContent * 1 - 1;
    div.textContent = count;
    if (count <= 0) {
        divScore.textContent = timeRunOut;
        count = 0;
        alert ("Out of time, try again!");
        location.reload();
    }
  }, 1000);

  function stopTimer() {
    count = 0;
}
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