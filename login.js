document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  fetch("https://script.google.com/macros/s/AKfycbxVpB2rDKmAg5Xn8xzrReVQV8hOaRJ-n3NMJQT4RLXfVvsgcuD7eC27_mbAHsfXdb3r/exec?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password))
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Login successful!");
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password.");
      }
    })
    .catch(err => {
      console.error(err);
      alert("Login failed. Please try again.");
    });
});
