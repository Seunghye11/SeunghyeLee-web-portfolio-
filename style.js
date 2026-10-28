/* PROJECT DATA */

const projects = [
    {
        title: "Jonticky",
        category: "branding",
        type: "Brand Identitiy · Character",
        image: "img/branding-01.jpg",
        link: "Branding/jonticky.html"
    },
    {
        title: "The Cupstates",
        category: "branding",
        type: "Brand Identity · Packaging",
        image: "img/branding-02.jpg",
        link: "Branding/thecupstates.html"
    },
    {
        title: "Lucky Cookie",
        category: "branding",
        type: "Brand Identity · Packaging",
        image: "img/branding-03.jpg",
        link: "Branding/luckycookie.html"
    },
    {
        title: "Sweet 惡糖 Club",
        category: "branding",
        type: "Character · Goods",
        image: "img/branding-04.jpg",
        link: "Branding/sweetdevilclub.html"
    },
    {
        title: "2024 Illustrations",
        category: "illustration",
        type: "Personal Works",
        image: "img/illust-01.jpg",
        link: "Illustration/2024.html"
    },
    {
        title: "@부록시",
        category: "web",
        type: "Web Design · Publishing",
        image: "img/web-01.jpg",
        link: "Web/buroksi.html"
    },
    {
        title: "2025 Illustrations",
        category: "illustration",
        type: "Personal Works",
        image: "img/illust-02.jpg",
        link: "Illustration/2025.html"
    },
    {
        title: "뭘 해도 걸린다",
        category: "web",
        type: "Web Design · Publishing",
        image: "img/web-02.jpg",
        link: "Web/health.html"
    },
    {
        title: "이곳저곳 - Design Study Archive",
        category: "web",
        type: "Publishing",
        image: "img/web-03.jpg",
        link: "Web/igotjogot.html"
    },
    {
        title: "puMPO!",
        category: "branding",
        type: "Brand Identity",
        image: "img/branding-05.jpg",
        link: "Branding/pumpo.html"
    },
    {
        title: "2026 Illustrations",
        category: "illustration",
        type: "Personal Works",
        image: "img/illust-03.jpg",
        link: "Illustration/2026.html"
    }
];


/* PROJECT CONTAINER */

const projectContainer = document.querySelector("#projects");


/* RENDER PROJECTS */

function renderProjects(filter = "all") {
    if (!projectContainer) return;

    projectContainer.innerHTML = "";

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter(project => project.category === filter);

    filteredProjects.forEach(project => {
        const article = document.createElement("article");
        article.className = `project project-${project.category}`;

        article.innerHTML = `
            <a href="${project.link}" class="project-image">
                <img src="${project.image}" alt="${project.title}">
            </a>

            <div class="project-info">
                <h2>${project.title}</h2>
                <p>${project.type}</p>
            </div>
        `;

        projectContainer.appendChild(article);
    });
}


/* CATEGORY FILTER */

const categoryButtons = document.querySelectorAll(".category-btn");

function setCategory(filter) {
    categoryButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.filter === filter
        );
    });

    renderProjects(filter);
}

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        setCategory(button.dataset.filter);
    });
});


/* INITIAL CATEGORY FROM URL */

const params = new URLSearchParams(window.location.search);
const filterFromURL = params.get("filter");

if (["branding", "illustration", "web"].includes(filterFromURL)) {
    setCategory(filterFromURL);
} else {
    setCategory("all");
}


/* INTRO MODAL */

const intro = document.querySelector(".intro");
const introModal = document.querySelector(".intro-modal");

if (intro && introModal) {

    const desktopHover = window.matchMedia(
        "(hover: hover) and (pointer: fine)"
    );

    /* DESKTOP: SHOW MODAL ON HOVER */

    intro.addEventListener("mouseenter", (event) => {
        if (!desktopHover.matches) return;

        introModal.style.left = `${event.clientX + 12}px`;
        introModal.style.top = `${event.clientY + 12}px`;
        introModal.style.opacity = "1";
        introModal.style.visibility = "visible";
    });

    /* DESKTOP: FOLLOW CURSOR */

    intro.addEventListener("mousemove", (event) => {
        if (!desktopHover.matches) return;

        introModal.style.left = `${event.clientX + 12}px`;
        introModal.style.top = `${event.clientY + 12}px`;
    });

    /* DESKTOP: HIDE MODAL ON MOUSE LEAVE */

    intro.addEventListener("mouseleave", () => {
        if (!desktopHover.matches) return;

        introModal.style.opacity = "0";
        introModal.style.visibility = "hidden";
    });

    /* MOBILE: TAP INTRO TO OPEN MODAL */

    intro.addEventListener("click", (event) => {
        if (desktopHover.matches) return;

        event.stopPropagation();

        introModal.classList.toggle("mobile-visible");
    });

    /* MOBILE: TAP OUTSIDE TO CLOSE MODAL */

    document.addEventListener("click", (event) => {
        if (desktopHover.matches) return;

        if (!intro.contains(event.target)) {
            introModal.classList.remove("mobile-visible");
        }
    });
}