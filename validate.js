document.getElementById("registrationForm").addEventListener("submit", function(event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();
  let dob = document.getElementById("dob").value;
  let gender = document.querySelector('input[name="gender"]:checked');
  let agree = document.getElementById("agree").checked;

  let errors = [];

  if (name.length < 3) {
    errors.push("Name must be at least 3 characters.");
  }

  if (!email.includes("@")) {
    errors.push("Enter a valid email address.");
  }

  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  if (!dob) {
    errors.push("Please select your date of birth.");
  }

  if (!gender) {
    errors.push("Please select a gender.");
  }

  if (!agree) {
    errors.push("You must agree to the terms.");
  }

  if (errors.length > 0) {
    event.preventDefault();
    alert(errors.join("\n"));
  }
});
