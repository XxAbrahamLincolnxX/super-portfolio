// Toggle mobile menu visibility
function toggleMenu() {
    const nav = document.querySelector('.topnav');
    const toggleButton = document.querySelector('.menu-toggle');
  
    if (!nav || !toggleButton) return;
  
    nav.classList.toggle('show');
  
    // Toggle aria-expanded attribute for accessibility
    const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
    toggleButton.setAttribute('aria-expanded', String(!isExpanded));
  }
  