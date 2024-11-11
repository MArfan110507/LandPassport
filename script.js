let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll(".slide");
    currentSlide = (n + slides.length) % slides.length;
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${100 * currentSlide}%)`;
    });
}

// Auto-play slider (optional)
setInterval(() => {
    showSlide(currentSlide + 1);
}, 10000);

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add("visible");
            } else {
                section.classList.remove("visible");
            }
        });
    });
});