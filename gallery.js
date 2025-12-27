document.addEventListener("DOMContentLoaded", () => {

    const gallery = document.querySelector('.gfb-gallery');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.gfb-right-arrow');
    const images = gallery.querySelectorAll('img');

    let currentIndex = 0;
    let visibleImages = 3;

    function getSlideMetrics() {
        const gap = parseFloat(getComputedStyle(gallery).gap) || 0;

        if (window.innerWidth <= 600) visibleImages = 1;
        else if (window.innerWidth <= 1024) visibleImages = 2;
        else visibleImages = 3;

        const singleImageWidth = images[0].getBoundingClientRect().width;
        return singleImageWidth + gap;
    }

    function updateGallery() {
        const slide = getSlideMetrics();
        const maxIndex = images.length - visibleImages;

        currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));
        gallery.style.transform = `translateX(${-currentIndex * slide}px)`;

        leftArrow.disabled = currentIndex === 0;
        rightArrow.disabled = currentIndex >= maxIndex;
    }

    leftArrow.addEventListener('click', () => {
        currentIndex--;
        updateGallery();
    });

    rightArrow.addEventListener('click', () => {
        currentIndex++;
        updateGallery();
    });

    window.addEventListener('resize', () => {
        currentIndex = 0;
        updateGallery();
    });

    /* 🔥 สำคัญ: รอรูปโหลดก่อน */
    window.addEventListener('load', updateGallery);
});
