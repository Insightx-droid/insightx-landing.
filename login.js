document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password))
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Login successful!");
        window.location.href = "student-lab.html";
      } else {
        alert("Invalid email or password.");
      }
    })
    .catch(err => {
      console.error(err);
      alert("Login failed. Please try again.");
    });
});
