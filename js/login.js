document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const email = emailField.value;

  const passField = document.getElementById("user-pass");
  const pass = passField.value;

  if (email === "a@b.c" && pass === "abc") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid User! Enter valid email and password.");
  }
});
