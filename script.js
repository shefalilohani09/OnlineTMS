document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch("http://localhost:8080/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                window.location.href = "dashboard.html";
            } else {
                alert("Login failed! Check your credentials.");
            }
        });
    }

    if (document.getElementById("taskList")) {
        fetchTasks();
    }
});

async function fetchTasks() {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:8080/api/tasks/all", {
        method: "GET",
        headers: { "Authorization": `Bearer ${token}` }
    });

    if (response.ok) {
        const tasks = await response.json();
        const taskList = document.getElementById("taskList");
        tasks.forEach(task => {
            const taskDiv = document.createElement("div");
            taskDiv.classList.add("task");
            taskDiv.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
                <p>Status: ${task.status}</p>
                <button onclick="updateTask(${task.id})">Mark as Completed</button>
            `;
            taskList.appendChild(taskDiv);
        });
    } else {
        alert("Failed to fetch tasks!");
    }
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "index.html";
}
// Function to update time every minute
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // 24-hour format
    const minutes = now.getMinutes().toString().padStart(2, '0'); 

    document.getElementById("clock").textContent = `${hours}:${minutes}`;
}

// Update clock every minute
setInterval(updateClock, 1000);
updateClock(); // Initial call

// Function to update task status
function redirectToCreateTask() {
    window.location.href = "createTask.html";
}
