const drinkNames = ["Mocha", "Latte", "Americano"];
var drinkName = drinkNames[Math.floor(Math.random()*drinkNames.length)];

// Drink name generation
$(document).ready(function() {
    $("#drink-random").text(`${drinkName}`);
});

//Drink sequences
const espresso = document.querySelector("#espresso-ingredient");
const doubleEspresso = document.querySelector("#double-espresso-ingredient");
const steamedMilk = document.querySelector("#milk-ingredient");
const chocolate = document.querySelector("#chocolate-ingredient");
const water = document.querySelector("#water-ingredient");

const americanoSequence = [
    espresso,
    water
];

const mochaSequence = [
    doubleEspresso,
    chocolate,
    steamedMilk
];

const latteSequence = [
    espresso,
    chocolate,
    steamedMilk
];

// if americano random drink name

// if $(americanoSequence).click(espresso).then((
//     $("#coffee-cup").attr('src', 'assets/images/single_espresso.png');
//     $("#water-ingredient").click(function() {
//         $("#coffee-cup").attr('src', 'assets/images/americano.png');
//         setTimeout(500);
//         location.reload();
//         alert('Well done!');
//     });
    

// )
    
// });

const ingredientClicked = ingredientClicked => {
    const expectedChoice = americanoSequence();
    if (expectedChoice === ingredientClicked) {
        if (americanoSequence.length === 0) {
            //start new round
            sequence.push(drinkName());
        }
    } else {
        alert('game over');
    }
};


if (drinkName === "Americano") {
    $("#espresso-ingredient").click(function() {
        $("#coffee-cup").attr('src', 'assets/images/single_espresso.png');
    });
    $("#water-ingredient").click(function() {
        $("#coffee-cup").attr('src', 'assets/images/americano.png');
        setTimeout(500);
        alert('Well done!');
        location.reload();
    });
} else if (drinkName === "Mocha") {
    $("#espresso-ingredient").click(function() {
        $("#coffee-cup").attr('src', 'assets/images/single_espresso.png');
    });
    $("#chocolate-ingredient").click(function() {
        $("#coffee-cup").attr('src', 'assets/images/chocolate.png');
    });
    $("#milk-ingredient").click(function() {
        $("#coffee-cup").attr('src', 'assets/images/mocha.png');
        alert('Well done!');
        location.reload();
    });
} else if (drinkName === "Latte") {
    $("#espresso-ingredient").click(function() {
        $("#coffee-cup").attr('src', 'assets/images/single_espresso.png');
    });
    $("#milk-ingredient").click(function() {
        $("#coffee-cup").attr('src', 'assets/images/mocha.png');
        alert('Well done!');
        location.reload();
    });
};

// function showScore() {
//     document.getElementById("score").innerText = game.score;
// }


// Reset game
$("#reset-button").click(function() {
    $("#drink-random").text(`${drinkName}`);
    location.reload();
    
});