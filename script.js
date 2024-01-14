document.addEventListener("DOMContentLoaded", function() {
    const acceptButton = document.getElementById("acceptButton");

    acceptButton.addEventListener("click", function() {
        // Redirect to another page when the button is clicked
        window.location.href = "Accept.html";
    });
});
