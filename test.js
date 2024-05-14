// Define a variable to hold the message
let message = "Hello, welcome to the JavaScript world!";

// Function to display the message
function displayMessage() {
    // Get the element with the ID 'output' and set its text content
    document.getElementById('output').textContent = message;
}

// Function to clear the message
function clearMessage() {
    // Get the element with the ID 'output' and clear its text content
    document.getElementById('output').textContent = '';
}

// Event handler to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    // Get the button element and set up the click event listener
    document.getElementById('showMessageButton').addEventListener('click', displayMessage);
    document.getElementById('clearMessageButton').addEventListener('click', clearMessage);
});

// Example of a simple loop
for (let i = 1; i <= 5; i++) {
    console.log("This is loop iteration number " + i);
}
