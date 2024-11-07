$(document).ready(function() {
    // When the form is submitted
    $('#loginForm').submit(function(event) {
        event.preventDefault();  // Prevent the form from submitting
        
        // Get the username and password entered
        var username = $('#username').val();
        var password = $('#password').val();

        // Check credentials
        if (username === "admin" && password === "12345") {
            // Redirect to main page (Replace with your actual page)
            window.location.href = "todolist.html";
        } else {
            // Display alert for invalid credentials
            alert("Invalid username or password");
        }
    });
});