document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.querySelector(".save-btn");
    const modal = document.querySelector(".popup-modal");
    const closeModal = document.querySelector(".close-btn");

    saveButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent any form submission
        modal.style.display = "block"; // Show modal
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none"; // Hide modal
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none"; // Hide modal if clicked outside
        }
    });
});
