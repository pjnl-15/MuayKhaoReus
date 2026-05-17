/* === HAMBURGUESA — menú mòbil === */
document.querySelectorAll('a[href="#top"]').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks  = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    // Toggle on button click (stopPropagation so the outside-click handler doesn't fire immediately)
    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      navLinks.classList.toggle('open');
    });

    // Close when any nav link is clicked
    navLinks.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });

    // Close when clicking anywhere outside the menu
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }
});
