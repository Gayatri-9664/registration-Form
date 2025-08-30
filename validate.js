document.getElementById("registrationForm").addEventListener("submit", function(event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let confirmPassword = document.getElementById("confirmPassword").value.trim();
  let dob = document.getElementById("dob").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let skills = document.getElementById("skills").value;
  let agree = document.getElementById("agree").checked;

  let errors = [];

  // Name validation
  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }

  // Email validation
  if (!email.includes("@") || !email.includes(".")) {
    errors.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Confirm password validation
  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  // DOB validation
  if (!dob) {
    errors.push("Please select your date of birth.");
  }

  // Gender validation
  if (!gender) {
    errors.push("Please select a gender.");
  }

  // Skills validation (only one required)
  if (!skills) {
    errors.push("Please select a skill.");
  }

  // Terms validation
  if (!agree) {
    errors.push("You must agree to the terms.");
  }

  // If errors, prevent submission
  if (errors.length > 0) {
    event.preventDefault();
    alert(errors.join("\n"));
  }
});
