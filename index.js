let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    // You can add additional logic here to handle other elements or styles
}

themeButton.addEventListener("click", toggleDarkMode);