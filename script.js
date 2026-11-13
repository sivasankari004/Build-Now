
// MOBILE MENU

const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    menu.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// CLOSE MOBILE MENU

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menu.textContent = "☰";
    });
});

// PROPERTY SEARCH

document.getElementById("searchBtn").addEventListener("click", () => {

    const type = document.getElementById("type").value;
    const budget = document.getElementById("budget").value;
    const bedrooms = document.getElementById("bedrooms").value;

    let visible = 0;

    document.querySelectorAll(".property-card").forEach(card => {

        const matchType =
            type === "all" || card.dataset.type === type;

        const matchBudget =
            budget === "all" ||
            Number(card.dataset.price) < Number(budget);

        const matchBed =
            bedrooms === "all" ||
            card.dataset.bed === bedrooms;

        const show = matchType && matchBudget && matchBed;

        card.style.display = show ? "block" : "none";

        if (show) visible++;
    });

    document.getElementById("noResults").style.display =
        visible ? "none" : "block";
});

// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const output = document.getElementById("formMessage");

    if (!name || !email || !phone || !message) {
        output.textContent = "Please fill in all fields.";
        return;
    }

    output.textContent =
        "Thank you, " + name +
        "! Your enquiry has been validated.";

    contactForm.reset();
});

// FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();
