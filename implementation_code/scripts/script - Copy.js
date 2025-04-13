<script>
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuItems = document.querySelectorAll('.menu-item');
    const backToTopBtn = document.querySelector('.back-to-top');

    // Menu button toggle
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Submenu toggle for mobile
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
            // Show button only if content is long enough and scrolled
            if (document.body.scrollHeight > window.innerHeight && window.scrollY > 300) {
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

    // Pagination (optional: add dynamic functionality if needed)
    const prevBtn = document.querySelector('.pagination a:first-child');
    const nextBtn = document.querySelector('.pagination a:last-child');
    
    // Example: Disable buttons if no previous/next page (implement logic as needed)
    if (prevBtn && nextBtn) {
        // Add your pagination logic here if dynamic behavior is needed
        // For now, they just use static href links
    }
});
 </script>
