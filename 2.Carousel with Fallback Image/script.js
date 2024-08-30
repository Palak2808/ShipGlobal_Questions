document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelector('.carousel-images');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const indicators = document.querySelectorAll('.indicator');

    let index = 0;
    const totalImages = indicators.length;

    function updateCarousel() {
        const offset = -index * 100;
        images.style.transform = `translateX(${offset}%)`;
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    function showNextImage() {
        index = (index + 1) % totalImages;
        updateCarousel();
    }

    function showPrevImage() {
        index = (index - 1 + totalImages) % totalImages;
        updateCarousel();
    }

    function goToImage(i) {
        index = i;
        updateCarousel();
    }

    nextButton.addEventListener('click', showNextImage);
    prevButton.addEventListener('click', showPrevImage);

    indicators.forEach(indicator => {
        indicator.addEventListener('click', (e) => {
            const i = parseInt(e.target.getAttribute('data-index'));
            goToImage(i);
        });
    });

    // Initial setup
    updateCarousel();
});
