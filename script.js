document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.slider-img');

    function changeSlide() {
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    if (slides.length > 0) {
        // Initaializing the first slide
        slides[currentSlide].style.display = 'block';

    }

    
    // Chang slide every 3 seconds
    setInterval(changeSlide, 3000)

});