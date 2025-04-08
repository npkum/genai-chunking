document.addEventListener('DOMContentLoaded', function() {
    // Get all submenus
    const submenus = document.querySelectorAll('.submenu');

    submenus.forEach(submenu => {
        const menuItem = submenu.querySelector('.menu-item');

        // Check if submenu has more than one item and toggle visibility
        if (submenu.querySelectorAll('ul li').length > 1) {
            menuItem.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link action
                submenu.classList.toggle('open');
				
		// Save the current expanded submenu states to localStorage
        localStorage.setItem('expandedSubmenus', JSON.stringify(expandedSubmenus));
            });
        }
    });
});
