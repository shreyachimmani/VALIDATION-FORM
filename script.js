// Get references to form elements
var UserName = document.ValidationForm.UserName;
var email = document.ValidationForm.email;
var phone = document.ValidationForm.phone;
var password = document.ValidationForm.password;
var ConfirmPassword = document.ValidationForm.ConfirmPassword;
var genderMale = document.ValidationForm.gender[0];
var genderFemale = document.ValidationForm.gender[1];

function validate() {
    let isValid = true; // To track overall form validation status

    // Name validation
    if (UserName.value.length >= 5) {
        UserName.classList.remove("is-invalid");
        UserName.classList.add("is-valid");
        document.getElementById("name-validation").innerText = "";
    } else {
        UserName.classList.remove("is-valid");
        UserName.classList.add("is-invalid");
        document.getElementById("name-validation").innerText = "Please enter at least 5 characters";
        isValid = false;
    }

    // Email validation
    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; // Basic email pattern
    if (emailPattern.test(email.value)) {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        document.getElementById("email-validation").innerText = "";
    } else {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        document.getElementById("email-validation").innerText = "Please enter a valid email address";
        isValid = false;
    }

    // Phone number validation (should not be '1234567890' and should be exactly 10 digits)
    if (phone.value.length === 10 && phone.value !== '1234567890') {
        phone.classList.remove("is-invalid");
        phone.classList.add("is-valid");
        document.getElementById("phone-validation").innerText = "";
    } else {
        phone.classList.remove("is-valid");
        phone.classList.add("is-invalid");
        document.getElementById("phone-validation").innerText = "Please enter a valid 10-digit phone number";
        isValid = false;
    }

    // Gender validation (ensure one of the radio buttons is selected)
    if (genderMale.checked || genderFemale.checked) {
        document.getElementById("gender-validation").innerText = "";
    } else {
        document.getElementById("gender-validation").innerText = "Please select your gender";
        isValid = false;
    }

    // Password validation
    if (password.value.length >= 8 && password.value !== 'password' && password.value !== UserName.value) {
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        document.getElementById("password-validation").innerText = "";
    } else {
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        document.getElementById("password-validation").innerText = "Password must be at least 8 characters long and cannot be 'password' or your name";
        isValid = false;
    }

    // Confirm Password validation
    if (ConfirmPassword.value === password.value && ConfirmPassword.value !== "") {
        ConfirmPassword.classList.remove("is-invalid");
        ConfirmPassword.classList.add("is-valid");
        document.getElementById("ConfirmPassword-validation").innerText = "";
    } else {
        ConfirmPassword.classList.remove("is-valid");
        ConfirmPassword.classList.add("is-invalid");
        document.getElementById("ConfirmPassword-validation").innerText = "Passwords do not match";
        isValid = false;
    }

    return isValid; // Return form validation status
}
