 document.addEventListener('DOMContentLoaded', () => {
            // Mobile menu toggle
            const menuBtn = document.querySelector('.menu-btn');
            const navLinks = document.querySelector('.nav-links');
            const menuItems = document.querySelectorAll('.menu-item');
            const backToTopBtn = document.querySelector('.back-to-top');
            const contentImages = document.querySelectorAll('.content-image'); // Select all images

            // Mobile menu functionality
            if (menuBtn && navLinks) {
                menuBtn.addEventListener('click', () => {
                    navLinks.classList.toggle('active');
                });
            }

            if (menuItems.length > 0) {
                menuItems.forEach(item => {
                    item.addEventListener('click', (e) => {
                        if (window.innerWidth <= 767) {
                            e.preventDefault();
                            item.classList.toggle('active');
                        }
                    });
                });
            }

            // Back to Top button functionality
            if (backToTopBtn) {
                window.addEventListener('scroll', () => {
                    if (window.scrollY > 60) {
                        backToTopBtn.style.display = 'block';
                    } else {
                        backToTopBtn.style.display = 'none';
                    }
                });

                backToTopBtn.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }

            // Image zoom functionality for all content-image elements
            if (contentImages.length > 0) {
                contentImages.forEach(image => {
                    const container = image.closest('.image-container');
                    const zoomInBtn = container.querySelector('.zoom-in');
                    const zoomOutBtn = container.querySelector('.zoom-out');
                    
                    let scale = 1; // Initial scale per image
                    const scaleStep = 0.2; // Zoom increment/decrement
                    const minScale = 1; // Minimum scale
                    const maxScale = 2; // Maximum scale

                    const updateZoom = () => {
                        image.style.transform = `scale(${scale})`;
                    };

                    // Zoom in
                    if (zoomInBtn) {
                        zoomInBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            if (scale < maxScale) {
                                scale += scaleStep;
                                updateZoom();
                            }
                        });
                    }

                    // Zoom out
                    if (zoomOutBtn) {
                        zoomOutBtn.addEventListener('click', (e) => {
                            e.stopPropagation();
                            if (scale > minScale) {
                                scale -= scaleStep;
                                updateZoom();
                            }
                        });
                    }

                    // Click on image to reset to original size
                    image.addEventListener('click', () => {
                        scale = 1;
                        updateZoom();
                    });
                });
            }
 });
