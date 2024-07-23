# project related to DOM

## project 1

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
