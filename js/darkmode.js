const darkModeToggle = document.getElementById('dark-mode-checkbox');
const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');

// Function to toggle dark mode with smooth transition
function toggleDarkMode() {
    darkModeStylesheet.disabled = !darkModeToggle.checked;
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
}

// Listen for changes on the dark mode toggle checkbox
darkModeToggle.addEventListener('change', toggleDarkMode);