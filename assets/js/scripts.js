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



const container = document.getElementById("trailer-container");

function setVideoSize() {
    const width = container.offsetWidth;
    const height = width * 9 / 16; // 16:9 ratio
    container.style.height = height + "px";
}

// Swap image for trailer
container.addEventListener("click", function () {

    // Set video container size based on screen format
    setVideoSize();

    // Apply styles to container in order to accomodate for videoplayer
    this.style.paddingBottom = "5px";
    this.style.boxSizing = "border-box";

    // Add videoplayer
    this.innerHTML = `
        <iframe 
            width="100%" 
            height="90%" 
            style="padding-top: 5px; box-sizing: border-box;"
            src="https://www.youtube.com/embed/9HDxTwkZfA0?autoplay=1&controls=0&modestbranding=1&rel=0&fs=0&vq=hd2160" 
            frameborder="0" 
            allow="autoplay; encrypted-media" 
            allowfullscreen>
        </iframe>
    `;
});

// Update videocontainer proportions on resize
window.addEventListener("resize", setVideoSize);
window.addEventListener("orientationchange", setVideoSize);