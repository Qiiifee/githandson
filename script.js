const menuButton = document.getElementById("menuButton");
const nav = document.querySelector("nav");
const learnButton = document.getElementById("learnButton");
const ctaButton = document.getElementById("ctaButton");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});

learnButton.addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});

ctaButton.addEventListener("click", () => {
    ctaButton.textContent = "Let's Collaborate!";
    setTimeout(() => {
        ctaButton.textContent = "Start Collaborating";
    }, 1800);
});
