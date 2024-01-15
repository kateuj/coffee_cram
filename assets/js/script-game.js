// Drink name generation
const drinkNames = ['Mocha', 'Latte', 'Americano', 'Flat White', 'Single Espresso', 'Double Espresso', 'Cappuccino'];
const correctDrinkNames = [];
let drinkName = getDrinkName();

//while loop
function getDrinkName() {
    let newDrink = drinkNames[Math.floor(Math.random() * drinkNames.length)];
    while (correctDrinkNames.includes(newDrink)) {
        newDrink = drinkNames[Math.floor(Math.random() * drinkNames.length)];
    }
    return newDrink;
};

$(document).ready(function () {
    $('#drink-random').text(`${drinkName}`);
});

// Ingredient query selectors
const espresso = document.querySelector('#espresso-ingredient');
const doubleEspresso = document.querySelector('#double-espresso-ingredient');
const steamedMilk = document.querySelector('#milk-ingredient');
const chocolate = document.querySelector('#chocolate-ingredient');
const water = document.querySelector('#water-ingredient');
const foam = document.querySelector('#foam-ingredient');

// Drink ingredient sequence strings
let americano = 'double espresso, water';
let latte = 'double espresso, milk';
let mocha = 'double espresso, chocolate, milk';
let flatWhite = 'double espresso, milk';
let cappuccino = 'espresso, milk, foam';

// Empty string generated for user ingredient clicks to make an ingredient list to check against the variable strings of each drink's mock up.
let userString = '';

// Progress counts - Score and Order counts
let divScore = document.querySelector("#player-score");
let divOrderCount = document.querySelector("#order-count");

let playerScore = 0;
let orderCount = 0;
let timeRunOut = 0;

function increasePlayerScore() {
    playerScore += 10;
    $('#player-score').text(`${playerScore}`);
};

function increaseOrderCount() {
    orderCount++;
    $('#order-count').text(`${orderCount}`);
};

function decreasePlayerScore() {
    playerScore -= 5;
    $('#player-score').text(`${playerScore}`);
};

// Pause timer when user clicks on 'how to play' button to view coffee menu
$('#openModal').click(function () {
    $('#timer').text(`Paused...`);
});

// Timer function to start when the user clicks off the first pop-up
$('#closeModal').click(function () {
    // Timer countdown for each question
    $('#timer').text(`15`);
    setInterval(function () {
        let div = document.querySelector("#timer");
        let count = div.textContent * 1 - 1;
        div.textContent = count;
        if (count <= 0) {
            $('#timer').text(` `);
            openPopUpTime();
        };
    }, 1000);
});

// Pop-up messages
const modalPop = document.getElementById("modal-pop");

// Try again pop-up
function openPopUpTry() {
    modalPop.classList.add("open");
    document.getElementById("modal-inner").innerHTML = `<h2>Oops!</h2>
    <p>Try another ingredient. <br>
    Check the menu again if you need to!</p>`;
    setTimeout(function () {
        $('#timer').text(`15`);
        modalPop.classList.remove("open");
    }, 2000);
};

// Run out of time pop-up
function openPopUpTime() {
    modalPop.classList.add("open");
    document.getElementById("modal-inner").innerHTML = `<h2>You've run out of time!</h2>
    <p>You scored: ${playerScore} and got the following answers correct ${correctDrinkNames.join(", ")}</p>
    <button id="close-modal-pop">Play again?</button>`;
    $("#close-modal-pop").click(function () {
        location.reload();
    });
};

// Correct answer pop-up
function openPopUpWellDone() {
    modalPop.classList.add("open");
    document.getElementById("modal-inner").innerHTML = `<h2>Well Done!</h2>
    <p>You got it right!</p>`;
    setTimeout(function () {
        modalPop.classList.remove("open");
    }, 1500);
};

//If player gets correct answer, runs below function
function playerWin() {
    setTimeout(function () {
        increasePlayerScore();
        increaseOrderCount();
        openPopUpWellDone();
        userString = '';
        correctDrinkNames.push(drinkName);
        drinkName = getDrinkName();
        $('#drink-random').text(`${drinkName}`);
        $('#timer').text(`15`);
    }, 1000);
};

//If player clicks incorrect answer, runs below function
function tryAgain() {
    setTimeout(function () {
        openPopUpTry();
        userString = '';
        $('#timer').text(`15`);
        decreasePlayerScore();
    }, 1000);
};


// Click functions with if statements for each ingredient in the drawer. Each triggers the coffee cup image to change to reflect the user's choices or resets the level for incorrect answers.
$(espresso).click(function () {
    userString += 'espresso';
    if (drinkName == 'Single Espresso' && userString == 'espresso') {
        $('#coffee-cup').attr('src', 'assets/images/single-espresso-cup.webp');
        playerWin();
    } else if (drinkName == 'Cappuccino' && userString == 'espresso') {
        $('#coffee-cup').attr('src', 'assets/images/espresso-cup.webp');
    } else {
        tryAgain();
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$(water).click(function () {
    userString += ', water';
    if (drinkName == 'Americano' && userString == americano) {
        $('#coffee-cup').attr('src', 'assets/images/americano.webp');
        playerWin();
    } else {
        tryAgain();
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$(chocolate).click(function () {
    userString += ', chocolate';
    if (drinkName == 'Mocha' && userString == 'double espresso, chocolate') {
        $('#coffee-cup').attr('src', 'assets/images/chocolate-cup.webp');
    } else {
        tryAgain();
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$(steamedMilk).click(function () {
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
        tryAgain();
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$(doubleEspresso).click(function () {
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
        tryAgain();
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

$(foam).click(function () {
    userString += ', foam';
    if (drinkName == 'Cappuccino' && userString == cappuccino) {
        $('#coffee-cup').attr('src', 'assets/images/cappuccino.webp');
        playerWin();
    } else {
        tryAgain();
        $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
    };
});

// Reset game
$('#reset-button').click(function () {
    location.reload('#drink-random');
});