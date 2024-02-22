// Function to dynamically set the width of the slider
function setSliderWidth() {
    const logoImage = document.getElementById('logo-image');
    const slider = document.querySelector('.slider');
    const sliderBefore = document.querySelector('.slider:before');
    
    // Set the width of the slider and slider before to match the width of the logo image
    slider.style.width = logoImage.offsetWidth + 'px';
    sliderBefore.style.width = logoImage.offsetWidth + 'px';
}

// Call the setSliderWidth function when the window is resized
window.addEventListener('resize', setSliderWidth);

// Call the setSliderWidth function initially to set the initial width
setSliderWidth();
