// Function to load and display the content of a page
function loadPage(url) {
    fetch(url)
        .then(response => response.text())
        .then(htmlContent => {
            document.getElementById('exhibition-container').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const url = this.getAttribute('href'); // Get the URL from the link
            loadPage(url); // Load the page content
        });
    });
});
