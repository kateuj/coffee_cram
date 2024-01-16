// Drink name generation
const drinkNames = ['Mocha', 'Latte', 'Americano', 'Flat White', 'Single Espresso', 'Double Espresso', 'Cappuccino'];
const correctDrinkNames = [];
let drinkName = getDrinkName();

// While loop to check that the user does not get the same drink twice 
function getDrinkName() {
    let newDrink = drinkNames[Math.floor(Math.random() * drinkNames.length)];
    while (correctDrinkNames.includes(newDrink)) {
        newDrink = drinkNames[Math.floor(Math.random() * drinkNames.length)];
    }
    return newDrink;
};

// Prints the randomized drink name within the 'drink-random' div on the index page
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

//Checks number of incorrect answers so that the game ends if the user gets more than 3 incorrect ingredient clicks.
let numberOfTries= 0;
function checkTries() {
if (numberOfTries >= 3 ) {
    endGame();
} else {
    tryAgain();
};
};

// Progress counts - Score and Order counts
let divScore = document.querySelector('#player-score');
let divOrderCount = document.querySelector('#order-count');

let playerScore = 0;
let orderCount = 0;

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

let output = $('#timer');
let isPaused = true;
let time = 16;
let timer = setInterval(function() {
    if(!isPaused) {
        time--;
        output.text(time);
        if (time == 0) {
            openPopUpTime();
            clearInterval(timer);
        }; 
    };
}, 1000);

// Pause timer when user clicks on 'how to play' button to view coffee menu
$('#openModal').click (function () {
    isPaused = true;
});

// Timer function to start when the user clicks off the first pop-up
$('#closeModal').click (function () {
    isPaused = false;
});

// Pop-up messages
const modalPop = document.getElementById('modal-pop');

// Try again pop-up
function openPopUpTry() {
    modalPop.classList.add('open');
    document.getElementById('modal-inner').innerHTML = `<h2>Oops!</h2>
    <p>Try another ingredient. <br>
    Check the menu again if you need to!</p>`;
    setTimeout(function () {
        time = 16;
        modalPop.classList.remove('open');
    }, 2000);
};

// Run out of time pop-up
function openPopUpTime() {
    modalPop.classList.add('open');
    if (correctDrinkNames.length === 0) {
    document.getElementById('modal-inner').innerHTML = `<h2>You've run out of time!</h2>
    <p>You did not get any answers correct but maybe next time!</p>
    <button id='close-modal-pop'>Play again?</button>`;
    $('#close-modal-pop').click(function () {
        location.reload();
    });
    } else {
        document.getElementById('modal-inner').innerHTML = `<h2>You've run out of time!</h2>
    <p>You scored: <strong>${playerScore}</strong> <br>and got the following answers correct: <strong>${correctDrinkNames.join(', ')}</strong></p>
    <button id='close-modal-pop'>Play again?</button>`;
    $('#close-modal-pop').click(function () {
        location.reload();
    });
    }
};

//Pop-up if the user gets too many wrong answers
function endGame() {
    modalPop.classList.add('open');
    if (correctDrinkNames.length === 0) {
        document.getElementById('modal-inner').innerHTML = `<h2>Game over!</h2>
        <p>You did not get any answers correct but maybe next time!</p>
        <button id='close-modal-pop'>Play again?</button>`;
        $('#close-modal-pop').click(function () {
            location.reload();
        });
        } else {
            document.getElementById('modal-inner').innerHTML = `<h2>Game over!</h2>
        <p>You scored: <strong>${playerScore}</strong> <br>and got the following answers correct: <strong>${correctDrinkNames.join(', ')}</strong></p>
        <button id='close-modal-pop'>Play again?</button>`;
        $('#close-modal-pop').click(function () {
            location.reload();
        });
    };
};

// Correct answer pop-up
function openPopUpWellDone() {
    modalPop.classList.add('open');
    document.getElementById('modal-inner').innerHTML = `<h2>Well Done!</h2>
    <p>You got it right!</p>`;
    setTimeout(function () {
        modalPop.classList.remove('open');
    }, 1500);
};

//If player gets correct answer, runs below function
function playerWin() {
    setTimeout(function () {
        increasePlayerScore();
        increaseOrderCount();
        userString = '';
        correctDrinkNames.push(drinkName);
        if (correctDrinkNames.length === 7) {
            $('#timer').text('End');
            modalPop.classList.add('open');
            document.getElementById('modal-inner').innerHTML = `<h2>Well done!</h2>
            <p>You have completed the game!<br>You scored: <strong>${playerScore}</strong> <br>and got the following answers correct:<br><strong>${correctDrinkNames.join(', ')}</strong></p>
            <button id='close-modal-pop'>Play again?</button>`;
            $('#close-modal-pop').click(function () {
                location.reload();
            });
        } else {
        drinkName = getDrinkName();
        $('#drink-random').text(`${drinkName}`);
        openPopUpWellDone();
        time = 16;
        }
    }, 1000);
    setTimeout( function () {
    $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
}, 1000);
};

//If player clicks incorrect answer, runs below function
function tryAgain() {
    setTimeout(function () {
        openPopUpTry();
        userString = '';
        time = 16;
        decreasePlayerScore();
        numberOfTries++;
    }, 1000);
    $('#coffee-cup').attr('src', 'assets/images/coffee-cup.webp');
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
        checkTries();
    };
});

$(water).click(function () { 
    userString += ', water';
    if (drinkName == 'Americano' && userString == americano) {
        $('#coffee-cup').attr('src', 'assets/images/americano.webp');
        playerWin();
    } else {
        checkTries();
    };
});

$(chocolate).click(function () {  
    userString += ', chocolate';
    if (drinkName == 'Mocha' && userString == 'double espresso, chocolate') {
        $('#coffee-cup').attr('src', 'assets/images/chocolate-cup.webp');
    } else {
        checkTries();
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
        checkTries();
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
        checkTries();
    };
});

$(foam).click(function () {
    userString += ', foam';
    if (drinkName == 'Cappuccino' && userString == cappuccino) {
        $('#coffee-cup').attr('src', 'assets/images/cappuccino.webp');
        playerWin();
    } else {
        checkTries();
    };
});

// Reset game
$('#reset-button').click(function () {
    location.reload('#drink-random');
});