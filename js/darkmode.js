const darkModeToggle = document.getElementById('dark-mode-checkbox');
const darkModeStylesheet = document.getElementById('dark-mode-stylesheet');

// Function to toggle dark mode with smooth transition
function toggleDarkMode() {
    darkModeStylesheet.disabled = !darkModeToggle.checked;
    document.body.classList.toggle('dark-mode', darkModeToggle.checked);
    
    // Store the dark mode state in local storage
    localStorage.setItem('darkMode', darkModeToggle.checked);
}

// Listen for changes on the dark mode toggle checkbox
darkModeToggle.addEventListener('change', toggleDarkMode);

// Function to initialize dark mode state
function initializeDarkMode() {
    // Retrieve dark mode state from local storage
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Set the dark mode toggle and stylesheet accordingly
    darkModeToggle.checked = isDarkMode;
    darkModeStylesheet.disabled = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
}

// Call initializeDarkMode function when the page loads
initializeDarkMode();
