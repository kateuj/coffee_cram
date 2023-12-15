var drinkNames = ['Mocha', 'Latte', 'Americano', 'Flat White', 'Single Espresso', 'Double Espresso', 'Cappuccino'];
var drinkName = drinkNames[Math.floor(Math.random()*drinkNames.length)];

const espresso = document.querySelector('#espresso-ingredient');
const doubleEspresso = document.querySelector('#double-espresso-ingredient');
const steamedMilk = document.querySelector('#milk-ingredient');
const chocolate = document.querySelector('#chocolate-ingredient');
const water = document.querySelector('#water-ingredient');

let americano = 'double espresso, water';
let latte = 'double espresso, milk';
let mocha = 'double espresso, chocolate, milk';
let flatWhite = 'double espresso, milk';
let cappuccino = 'espresso, milk, foam';

// Drink name generation
$(document).ready(function() {
    $('#drink-random').text(`${drinkName}`);
});

// setInterval(function () {
//     var div = document.querySelector("#counter");
//     var count = div.textContent * 1 - 1;
//     div.textContent = count;
//     if (count <= 0) {
//         location.reload('#drink-random');
//         // counter -10
//     }
//   }, 1000);

// var divScore = document.querySelector("#score");
// var count = divScore.textContent * 1 - 1;
// $('#score').text(`${totalScore}`);
  
let userString = '';

$('#espresso-ingredient').click(function() {
    userString += 'espresso';
    if (drinkName == 'Single Espresso' && userString == 'espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
        setTimeout(function(){
            alert('Well done!');
        },1000);
        setTimeout(function(){
            userString = '';
            location.reload('#drink-random');
        },1000);
    } else if (drinkName == 'Cappuccino' && userString == 'espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
    } else {
        alert('Oops! Start again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.png');
    };
});

$('#water-ingredient').click(function() {
    userString += ', water';
    if (drinkName == 'Americano' && userString == americano) {
        $('#coffee-cup').attr('src', 'assets/images/americano.png');
        setTimeout(function(){
            alert('Well done!');
        },1000);
        setTimeout(function(){
            userString = '';
            location.reload('#drink-random');
        },1000);
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.png');
    };
});

$('#chocolate-ingredient').click(function() {
    userString += ', chocolate';
    if (drinkName == 'Mocha' && userString == 'double espresso, chocolate') {
        $('#coffee-cup').attr('src', 'assets/images/chocolate-cup.png');
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.png');
    };
});

$('#milk-ingredient').click(function() {
    userString += ', milk';
    if (drinkName == 'Latte' && userString == latte) {
        $('#coffee-cup').attr('src', 'assets/images/latte.png');
        setTimeout(function(){
            alert('Well done!');
        },1000);
        setTimeout(function(){
            userString = '';
            location.reload('#drink-random');
        },1000);
    } else if (drinkName == 'Cappuccino' && userString == 'espresso, milk') {
        $('#coffee-cup').attr('src', 'assets/images/chocolate-cup.png');
    } else if (drinkName == 'Mocha' && userString == mocha) {
        $('#coffee-cup').attr('src', 'assets/images/mocha.png');
        setTimeout(function(){
            alert('Well done!');
        },1000);
        setTimeout(function(){
            userString = '';
            location.reload('#drink-random');
        },1000);
    } else if (drinkName == 'Flat White' && userString == flatWhite) {
        $('#coffee-cup').attr('src', 'assets/images/latte.png');
        setTimeout(function(){
            alert('Well done!');
        },1000);
        setTimeout(function(){
            userString = '';
            location.reload('#drink-random');
        },1000);
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.png');
    };
});

$('#double-espresso-ingredient').click(function() {
    userString += 'double espresso';
    if (drinkName == 'Americano' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
    } else if (drinkName == 'Flat White' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
    } else if (drinkName == 'Latte' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
    } else if (drinkName == 'Mocha' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
    } else if (drinkName == 'Double Espresso' && userString == 'double espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
        setTimeout(function(){
            alert('Well done!');
        },1000);
        setTimeout(function(){
            userString = '';
            location.reload('#drink-random');
        },1000);
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.png');
    };
});

$('#foam-ingredient').click(function() {
    userString += ', foam';
    if (drinkName == 'Cappuccino' && userString == cappuccino) {
        $('#coffee-cup').attr('src', 'assets/images/latte.png');
        setTimeout(function(){
            alert('Well done!');
        },1000);
        setTimeout(function(){
            userString = '';
            location.reload('#drink-random');
        },1000);
    } else {
        alert('Oops! Try again!');
        userString = '';
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.png');
    };
});



// $('#espresso-ingredient').click(function() {
//     userString += 'espresso';
//         if (drinkName == 'Americano' && userString == 'espresso') {
//             $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
//         });
// };

// $('#water-ingredient').click(function() {
//     userString += ', water';
//     if (drinkName === 'Americano' && userString = 'espresso, water') {
//         $('#coffee-cup').attr('src', 'assets/images/americano.png');
//             setTimeout(function(){
//             alert('Well done!');
//             },1000);
//             setTimeout(function(){
//             location.reload();
//             },1000);
//             });
// };

// function showScore() {
//     document.getElementById('score').innerText = game.score;
// }


// Reset game
$('#reset-button').click(function() {
    location.reload('#drink-random');
});