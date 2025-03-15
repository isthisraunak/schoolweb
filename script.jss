// Smooth scrolling for navigation
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Modal functionality
const applyBtn = document.getElementById("applyBtn");
const modal = document.getElementById("applyModal");
const closeModal = document.getElementById("closeModal");

applyBtn.addEventListener("click", () => modal.classList.remove("hidden"));
closeModal.addEventListener("click", () => modal.classList.add("hidden"));

// Learn more button smooth scroll
document.getElementById("learnMore").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});
