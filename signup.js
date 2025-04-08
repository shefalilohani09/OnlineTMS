function sendOTP() {
    const user = {
      username: document.getElementById("username").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value,
    };
  
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    fetch("http://localhost:8080/api/auth/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
    .then(res => res.text())
    .then(msg => {
      alert("OTP sent to email.");
      document.getElementById("otpSection").style.display = "block";
    })
    .catch(err => console.error(err));
  }
  
  function verifyOTP() {
    const email = document.getElementById("email").value;
    const otp = document.getElementById("otp").value;
  
    fetch("http://localhost:8080/api/auth/verify-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp })
    })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => console.error(err));
  }
  