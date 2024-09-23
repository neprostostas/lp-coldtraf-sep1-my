document.addEventListener("DOMContentLoaded", () => {
    const drops = Array.from(document.querySelectorAll('.live-feed-conveyor__ordinary .conveyor__list .live-drop'));
    drops.forEach((drop, index) => drop.style.transform = `translateX(${(index * 100) - 100}%)`);

    let currentIndex = 0, yOffsetFactor = 0;

    const updateTransforms = () => {
        drops.forEach((drop, index) => {
            const translateX = 100 * ((index - currentIndex + drops.length) % drops.length) - 100;
            drop.style.transform = `translateX(${translateX}%) translateY(${translateX === -100 ? -100 * (++yOffsetFactor / 3) : 0}%)`;
            drop.style.zIndex = translateX === -100 ? '0' : '1';
            drop.style.transition = "transform .2s ease";
        });
    };

    // Initial call
    updateTransforms();

    setInterval(() => {
        currentIndex = (currentIndex - 1 + drops.length) % drops.length;
        updateTransforms();
    }, 200);





    const caseImages = document.querySelectorAll('.case-img');

    caseImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            caseImages.forEach(otherImage => {
                if (otherImage !== image) otherImage.classList.add('other');
            });
        });

        image.addEventListener('mouseleave', () => {
            caseImages.forEach(otherImage => otherImage.classList.remove('other'));
        });
    });


});
