const buttons = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".gallery-grid .image");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {

    document.querySelector(".filter-btn.active").classList.remove("active");
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    images.forEach(img => {
        if (filter === "all" || img.getAttribute("data-category") === filter) {
        img.style.display = "block";
        } else {
        img.style.display = "none";
        }
    });
    });
});