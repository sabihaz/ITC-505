function validateForm() {
    // Get field values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Get error spans
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmPasswordError = document.getElementById('confirmPasswordError');

    // Reset errors
    firstNameError.textContent = '';
    lastNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    let valid = true;

    // Validate fields
    if (!firstName) {
        firstNameError.textContent = 'First name is required.';
        valid = false;
    }
    if (!lastName) {
        lastNameError.textContent = 'Last name is required.';
        valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        emailError.textContent = 'Invalid email format.';
        valid = false;
    }
    if (!password) {
        passwordError.textContent = 'Password is required.';
        valid = false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        valid = false;
    }

    return valid;
}
