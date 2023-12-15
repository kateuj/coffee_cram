var drinkNames = ['Mocha', 'Latte', 'Americano'];
var drinkName = drinkNames[Math.floor(Math.random()*drinkNames.length)];

const espresso = document.querySelector('#espresso-ingredient');
const doubleEspresso = document.querySelector('#double-espresso-ingredient');
const steamedMilk = document.querySelector('#milk-ingredient');
const chocolate = document.querySelector('#chocolate-ingredient');
const water = document.querySelector('#water-ingredient');

// Drink name generation
$(document).ready(function() {
    $('#drink-random').text(`${drinkName}`);
});

let userString = '';


if (drinkName === 'Americano') {
    $('#espresso-ingredient').click(function() {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
        userString += 'espresso';
    });
    $('#foam-ingredient').click(function() {
        alert('Oops! Try again!');
    });
    $('#double-espresso-ingredient').click(function() {
        alert('Oops! Try again!');
    });
    $('#milk-ingredient').click(function() {
        alert('Oops! Try again!');
    });
    $('#chocolate-ingredient').click(function() {
        alert('Oops! Try again!');
    });

    if (userString.includes('espresso')) {
        $('#water-ingredient').click(function() {
            $('#coffee-cup').attr('src', 'assets/images/americano.png');
                setTimeout(function(){
                alert('Well done!');
                },1000);
                setTimeout(function(){
                location.reload();
                },1000);
                });
            };

} else if (drinkName === 'Mocha') {
    $('#espresso-ingredient').click(function() {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
    });
    $('#chocolate-ingredient').click(function() {
        $('#coffee-cup').attr('src', 'assets/images/chocolate-cup.png');
    });
    $('#milk-ingredient').click(function() {
        $('#coffee-cup').attr('src', 'assets/images/mocha.png');
        setTimeout(function(){
            alert('Well done!');
          },1000);
          setTimeout(function(){
            location.reload();
          },1000);
    });
} else if (drinkName === 'Latte') {
    $('#espresso-ingredient').click(function() {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.png');
    });
    $('#milk-ingredient').click(function() {
        $('#coffee-cup').attr('src', 'assets/images/latte.png');
        setTimeout(function(){
            alert('Well done!');
          },1000);
          setTimeout(function(){
            location.reload();
          },1000);
    });
};

// function showScore() {
//     document.getElementById('score').innerText = game.score;
// }


// Reset game
$('#reset-button').click(function() {
    $('#drink-random').text(`${drinkName}`);
    location.reload();
});