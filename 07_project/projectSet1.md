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
