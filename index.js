// Part 1: Requirements
const app = document.getElementById("app");

// Create Game Title using DOM:
const gameTitle = document.createElement("h3");
gameTitle.textContent = "Guess The Right Number!";
app.appendChild(gameTitle);

// Create a message to display
const message = document.createElement("p");
message.textContent = "Enter a number between 1 and 100:";
app.appendChild(message);


// const correctNumber = 23; // set up a static correct number
const correctNumber = Math.floor(Math.random() * 100 + 1); // Dynamic Correct Number Generation
console.log("This is the correct number: ", correctNumber);

// set up the number of attempts
let attempts = 5;


while (attempts > 0) {
    // Prompt the user for a guess
    let guess = parseInt(window.prompt("Guess a number between 1 and 100:"));
    console.log("This is the guessed number: ", guess);
    attempts--;
    console.log(`You have ${attempts} attempts!`);


    if (guess < correctNumber) {
        window.alert(`The number you guessed ${guess} is too Low!\n You have ${attempts} attempts left.`);
    } else if (guess > correctNumber) {
        window.alert(`The number you guessed ${guess} is too High!\n You have ${attempts} attempts left.`);
        // console.log(`You have ${attempts} attempts!`);
    } else if (guess === correctNumber) {
        window.alert(`Congratulations, ${guess} was the correct number!\n you guessed it in ${(5 - attempts)} attempts.`);
        break;
    }

}
if (attempts === 0) {
    window.alert(`Game Over! You have ${attempts} attempts left.`)
}


