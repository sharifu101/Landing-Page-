document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('response-message');

    if (email) {
        // Simulate an API call or form submission
        setTimeout(() => {
            responseMessage.innerText = "Thank you for signing up! Please check your email for confirmation.";
        }, 500);
    } else {
        responseMessage.innerText = "Please enter a valid email address.";
    }
});
