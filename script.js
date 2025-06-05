/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    const topnav = document.querySelector('.topnav');
    const icon = document.querySelector('.icon');
  
    topnav.classList.toggle('show');
  
    // Update aria-expanded
    const expanded = icon.getAttribute('aria-expanded') === 'true';
    icon.setAttribute('aria-expanded', !expanded);
  }
  
