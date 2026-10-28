const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});