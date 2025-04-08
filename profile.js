document.addEventListener("DOMContentLoaded", function() {
    let editButtons = document.querySelectorAll(".edit-btn");
    
    editButtons.forEach(button => {
        button.addEventListener("click", function() {
            let infoBox = this.parentElement;
            let textFields = infoBox.querySelectorAll(".editable");

            textFields.forEach(field => {
                let newValue = prompt("Enter new value:", field.innerText);
                if (newValue !== null && newValue.trim() !== "") {
                    field.innerText = newValue;
                }
            });
        });
    });
});
