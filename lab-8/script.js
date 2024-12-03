document.getElementById("secureForm").addEventListener("submit", function(event) {
    const firstName = sanitizeInput(document.getElementById("firstName").value.trim());
    const lastName = sanitizeInput(document.getElementById("lastName").value.trim());
    const email = sanitizeInput(document.getElementById("email").value.trim());
    const password = sanitizeInput(document.getElementById("password").value);
    const confirmPassword = sanitizeInput(document.getElementById("confirmPassword").value);
    const errorMessage = document.getElementById("errorMessage");

    let errors = [];

    // Validate empty fields
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        errors.push("All fields are required.");
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        errors.push("Invalid email format.");
    }

    // Validate password match
    if (password !== confirmPassword) {
        errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
        event.preventDefault();
        errorMessage.textContent = errors.join(" ");
    } else {
        errorMessage.textContent = "";
    }
});

// Function to sanitize input by escaping special characters
function sanitizeInput(input) {
    const div = document.createElement("div");
    div.innerText = input; // Escapes HTML characters
    return div.innerText;
}
