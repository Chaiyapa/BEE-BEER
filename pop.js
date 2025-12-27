document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        elements.forEach(el => {
            const boxTop = el.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                el.classList.add("active");
            }
        });
    };

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);
});
