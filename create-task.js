// Function to save task and show popup confirmation
function saveTask() {
    // Get form values
    let taskTitle = document.getElementById("taskTitle").value.trim();
    let taskDescription = document.getElementById("taskDescription").value.trim();
    let dueDate = document.getElementById("dueDate").value;
    let priority = document.getElementById("priority").value;

    // Validate form inputs
    if (taskTitle === "" || taskDescription === "" || dueDate === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Show popup confirmation
    document.getElementById("popup").style.display = "block";

    // Clear form fields after saving
    document.getElementById("taskForm").reset();
}

// Function to close popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}
