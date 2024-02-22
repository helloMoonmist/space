// Assuming this code is in exhConstructor.js or a similar file
fetch('../exhibitions.json')
    .then(response => response.json())
    .then(exhibitions => {
        const container = document.getElementById('exhibition-container');
        exhibitions.forEach(exhibition => {
            const section = document.createElement('section');
            section.innerHTML = `
                <a href="${exhibition.url}" class="exhibition-link">
                    <h2 class="exhibition">${exhibition.title}</h2>
                    <p class="date">${exhibition.date}</p>
                    <img src="${exhibition.imageSrc}" alt="${exhibition.title} Image" class="img">
                </a>
            `;
            container.appendChild(section);

            section.querySelector('.exhibition-link').addEventListener('click', (e) => {
                e.preventDefault();
                loadExhibitionContent(exhibition.url);
            });
        });
    })
    .catch(error => {
        console.error('Error fetching exhibitions:', error);
    });

// Function to load and display the exhibition content
function loadExhibitionContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(htmlContent => {
            document.getElementById('exhibition-container').innerHTML = htmlContent;
        })
        .catch(error => {
            console.error('Error loading exhibition content:', error);
        });
}
