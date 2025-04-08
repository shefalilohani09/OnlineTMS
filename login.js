function loginUser(event) {
    event.preventDefault();
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    if (username === "admin" && password === "1234") {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect after login
    } else {
        alert("Invalid username or password!");
    }
}
