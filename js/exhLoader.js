// Function to load and display the content of an individual exhibition
function loadExhibitionContent(exhibitionUrl) {
    fetch(exhibitionUrl)
        .then(response => response.text())  // Fetching the HTML content
        .then(htmlContent => {
            const container = document.getElementById('exhibition-container');
            container.innerHTML = htmlContent;  // Replacing the content
        })
        .catch(error => {
            console.error('Error loading exhibition:', error);
        });
}

document.addEventListener('DOMContentLoaded', () => {
    // Assuming the exhibitions are already loaded and links are set up
    const links = document.querySelectorAll('.exhibition-link');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const exhibitionUrl = this.getAttribute('href'); // Get the URL from the link
            loadExhibitionContent(exhibitionUrl); // Load the exhibition content
        });
    });
});
