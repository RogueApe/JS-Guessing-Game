const guessGame = function () {
    let randomNum = Math.floor(Math.random() * 10 + 1);
    let userGuess;

    // User chances
    let chances = 3;

    // game switch ON/OFF
    let again = true;

    while (again === true) {
        userGuess = prompt('Guess a number between 1 to 10');
        console.log(randomNum, userGuess);

        if (userGuess == randomNum) {
            again = false;
            alert('Congratulations! You\'ve won!')
        } else {
            chances -= 1;
            alert(`Try again! You only have ${chances} chances left!`);

            let minHint = randomNum - 1;
            let maxHint = randomNum + 1;

            alert(`Hints: Number is between ${minHint} - ${maxHint}`)
            console.log(`${chances} chances left`);


            if (chances === 0) {
                again = false;
                alert(`GAME OVER! The correct answer is ${randomNum}`)
            }
        }
    }
};
guessGame();