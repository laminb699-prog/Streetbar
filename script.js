// Street Bar Website

document.addEventListener("DOMContentLoaded", () => {
    console.log("Street Bar website loaded!");

    const orderButtons = document.querySelectorAll(".order-btn");

    orderButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("Ordering system will be available soon!");
        });
    });
});