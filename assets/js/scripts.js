console.log("JS LOADED");



const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // Save theme preference
    localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    window.location.reload(true);
});
// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

const savedTheme = localStorage.getItem("theme");

function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);
}

// Use saved preference if it exists
if (savedTheme === "dark") {
    applyTheme(true);
} else if (savedTheme === "light") {
    applyTheme(false);
} else {
    // Otherwise use system preference
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark);
}



// Change to light/dark background images on an
// image per image basis
function updateThemeImages(isDark) {
    document.querySelectorAll(".theme-image").forEach(img => {
        img.src = isDark ? img.dataset.dark : img.dataset.light;
        console.log(img.src);
    });
}
const isDark = document.body.classList.contains("dark-mode");
updateThemeImages(isDark);