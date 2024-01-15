// script.js

document.addEventListener("DOMContentLoaded", function() {
    const acceptButton1 = document.getElementById("acceptButton1");
    const acceptButton2 = document.getElementById("acceptButton2");

    if (acceptButton1) {
        acceptButton1.addEventListener("click", function() {
            // Redirect to the next page for the first HTML
            window.location.href = "list.html";
        });
    }

    if (acceptButton2) {
        acceptButton2.addEventListener("click", function() {
            // Redirect to the next page for the second HTML
            window.location.href = "Accept.html";
        });
    }
});
