/* This script contains js functions for CaseIQ */

function revealLogIn() {
    // Function will reveal the log-in form when the user clicks the "Log In" button
    let navbarElement = document.querySelector(".navbar");
    navbarElement.classList.toggle('expanded');
}

// Add event listener to the "Log In" button
document.addEventListener('DOMContentLoaded', function() {
    alert("It's applied!");
    var logInButton = document.querySelector('.log-in-button');
    logInButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        revealLogIn();
    });
});