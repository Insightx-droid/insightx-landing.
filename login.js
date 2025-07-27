document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("https://script.google.com/macros/s/AKfycbwk2-XTYuf6sDUlGEwQu8_3M_jHtHBmaMaWY-4ueOv7jPJ2op4LCjW1eIdvbalxxvEs/exec?email=" + encodeURIComponent(email) + "&password=" + encodeURIComponent(password){
          mode: "no-cors"
    })
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
