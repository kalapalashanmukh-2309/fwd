
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');

    images.forEach(img => {
        const container = img.parentElement;

   
        container.style.perspective = '1000px';

        img.addEventListener('mousemove', (e) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            img.style.transition = 'none';
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'rotateX(0) rotateY(0) scale(1)';
            img.style.transition = 'transform 0.6s ease';
        });

       
        img.style.transformStyle = 'preserve-3d';
        img.style.transition = 'transform 0.6s ease';
    });
});
