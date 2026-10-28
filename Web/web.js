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

const detailLink = document.querySelector(".detail-link");
const introModal = document.querySelector(".intro-modal");

detailLink.addEventListener("mouseenter", () => {
    introModal.style.opacity = "1";
    introModal.style.visibility = "visible";
});

detailLink.addEventListener("mousemove", (event) => {
    introModal.style.left = `${event.clientX + 12}px`;
    introModal.style.top = `${event.clientY + 12}px`;
});

detailLink.addEventListener("mouseleave", () => {
    introModal.style.opacity = "0";
    introModal.style.visibility = "hidden";
});