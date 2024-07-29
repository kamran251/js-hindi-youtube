# project related to DOM

## project 1 solution

``` javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

// Event listener for changing background color
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    const color = e.target.id;
    if (['grey', 'white', 'blue', 'yellow'].includes(color)) {
      body.style.background = color;
    }
  });
});

// Event listener for logging button clicks
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    console.log(`Button ${e.target.id} was clicked.`);
  });
});

// Event listener for showing an alert when a button is clicked
buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    alert(`You clicked the ${e.target.id} button.`);
  });
});


```

## project 2 solution

```javascript
// Select the form element and add an event listener for the 'submit' event.
document.querySelector('form').addEventListener('submit', function (e) {
  // Prevent the form from submitting the traditional way, which would refresh the page.
  e.preventDefault();
  
  // Parse the height value from the input element to an integer.
  const height = parseInt(document.querySelector('#height').value);
  // Parse the weight value from the input element to an integer.
  const weight = parseInt(document.querySelector('#weight').value);
  // Cache the element where the results will be displayed.
  const results = document.querySelector('#results');
  
  // Check if the height is not a number or less than or equal to 0.
  if (height <= 0 || isNaN(height)) {
    // Display an error message if the height is invalid.
    results.innerHTML = `Please provide a valid height: ${height}`;
    return; // Exit the function early if the height is invalid.
  }
  
  // Check if the weight is not a number or less than or equal to 0.
  if (weight <= 0 || isNaN(weight)) {
    // Display an error message if the weight is invalid.
    results.innerHTML = `Please provide a valid weight: ${weight}`;
    return; // Exit the function early if the weight is invalid.
  }
  
  // Calculate the BMI using the formula: weight (kg) / (height (cm) / 100)^2.
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  // Determine the weight status based on the BMI value.
  let weightStatus = '';
  if (bmi < 18.6) {
    weightStatus = 'underweight';
  } else if (bmi > 24.9) {
    weightStatus = 'overweight';
  } else {
    weightStatus = 'normal weight';
  }
  
  // Display the calculated BMI and the corresponding weight status in the results element.
  results.innerHTML = `<span>${bmi} -> You are ${weightStatus}</span>`;
});

```

### Project 3 solution
```javascript
// const colck=document.querySelector('#clock');
const clock=document.getElementById('clock');
setInterval(function(){
  let date=new Date();
  // console.log(date.toLocaleString());
  clock.innerHTML=date.toLocaleString()
},1000);

```

####project 4 solution
```javascript
// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1;

// Cache DOM elements for later use
const submitBtn = document.querySelector('#subt'); // Submit button
const userInput = document.querySelector('#guessField'); // Input field for user's guess
const guessSlot = document.querySelector('.guesses'); // Element to display previous guesses
const remaining = document.querySelector('.lastResult'); // Element to display remaining attempts
const message = document.querySelector('.lowOrHi'); // Element to display feedback messages
const startOver = document.querySelector('.resultParas'); // Element to append the "Start New Game" button

let prevGuesses = []; // Array to store previous guesses
let attemptsLeft = 10; // Number of attempts left
let gameActive = true; // Boolean to track if the game is active

// Event listener for the submit button
submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent form from submitting
  if (gameActive) { // Check if the game is active
    const guess = parseInt(userInput.value); // Get the user's guess and convert it to a number
    handleGuess(guess); // Call function to handle the guess
  }
});

// Function to handle the guess
function handleGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) { // Validate the guess
    displayMessage('Please enter a valid number between 1 and 100'); // Display validation message
  } else {
    prevGuesses.push(guess); // Add the guess to the previous guesses array
    displayGuesses(); // Update the display of previous guesses
    checkGuess(guess); // Check if the guess is correct
  }
}

// Function to check if the guess is correct
function checkGuess(guess) {
  if (guess === randomNumber) { // Check if the guess matches the random number
    displayMessage('Congratulations! You guessed it right!'); // Display success message
    endGame(); // End the game
  } else if (attemptsLeft === 1) { // Check if this was the last attempt
    displayMessage(`Game Over! The number was ${randomNumber}`); // Display game over message with the correct number
    endGame(); // End the game
  } else {
    displayMessage(guess < randomNumber ? 'Too low!' : 'Too high!'); // Display if the guess was too low or too high
    attemptsLeft--; // Decrease the number of attempts left
    remaining.innerText = attemptsLeft; // Update the display of remaining attempts
  }
}

// Function to display the guesses
function displayGuesses() {
  guessSlot.innerText = prevGuesses.join(', '); // Join the guesses array into a string and display it
}

// Function to display messages
function displayMessage(msg) {
  message.innerText = msg; // Update the feedback message
}

// Function to end the game
function endGame() {
  gameActive = false; // Set game active to false
  userInput.disabled = true; // Disable the input field
  const newGameBtn = document.createElement('button'); // Create a new button element
  newGameBtn.textContent = 'Start New Game'; // Set the button text
  newGameBtn.classList.add('new-game-btn'); // Add a class to the button
  startOver.appendChild(newGameBtn); // Append the button to the startOver element
  newGameBtn.addEventListener('click', startNewGame); // Add an event listener to the button to start a new game
}

// Function to start a new game
function startNewGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
  prevGuesses = []; // Reset the previous guesses array
  attemptsLeft = 10; // Reset the number of attempts left
  gameActive = true; // Set game active to true

  userInput.disabled = false; // Enable the input field
  userInput.value = ''; // Clear the input field
  guessSlot.innerText = ''; // Clear the previous guesses display
  remaining.innerText = attemptsLeft; // Reset the remaining attempts display
  message.innerText = ''; // Clear the feedback message

  const newGameBtn = document.querySelector('.new-game-btn'); // Select the new game button
  startOver.removeChild(newGameBtn); // Remove the new game button from the DOM
}


```