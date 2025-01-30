// Part 1: Requirements
const app = document.getElementById("app");

// Create Game Title using DOM:
const gameTitle = document.createElement("h3");
gameTitle.innerHTML = "<h3>Guess The Right Number!</h3>";
app.appendChild(gameTitle);

// set up the correct number
const correctNumber = 23;
console.log("This is the correct number: ", correctNumber);

// set up the number of attempts
let attempts = 5;

while (attempts > 0) {
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
        window.alert(`Congratulations, ${guess} was the correct number!\n you guessed it ${(5 - attempts)} attempts.`);
        break;
    }

}
if (attempts === 0) {
    window.alert(`Game Over! You have ${attempts} attempts left.`)
}


















// if (guess < correctNumber) {
//     window.alert("The number you guessed is too Low! Try Again");
// } else if (guess > correctNumber) {
//     window.alert("The number you guessed is too High! Try Again");
// } else {
//     window.alert("Congratulations, you guessed it!");
// }