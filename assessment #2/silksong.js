document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Contact form popup
    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Your message has been sent.");
        });
    }

});
