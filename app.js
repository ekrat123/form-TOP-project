const form = document.getElementById("sign-up");
const password = document.querySelector('input[name="password"]');
const confirmPassword = document.querySelector(
  'input[name="confirm-password"]'
);

function checkPassword(e) {
  e.preventDefault();
  if (password.value !== confirmPassword.value) {
    alert("Password and confirm password didn't match");
    confirmPassword.value = "";
    confirmPassword.focus();
  } else {
    alert("Account created successfully");
  }
}

form.addEventListener("submit", checkPassword);
