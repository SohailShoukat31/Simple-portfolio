document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        // Simple validation
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        }
        else {
            alert("Thank you for your message, ".concat(name, "!"));
            contactForm.reset(); // Reset the form after submission
        }
    });
});
