document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    let slides = document.querySelectorAll('.slider-img');
    const form = document.getElementById("booking-form");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("close-modal");

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

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        let isValid = true;

        // Check if name is empty
        if (name === '') {
            alert('Name cnnot be empty')
            isValid = false
        }

        // if validation passes
        if (isValid) {
            form.submit();
        }
        modal.classList.remove("hidden")
    });

    closeModal.addEventListener("click", function () {
        modal.classList.add("hidden")
    });
});