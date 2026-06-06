// Wrapmate-style navigation — Task 2
(function() {
  var hamburger = document.getElementById('navHamburger');
  var overlay   = document.getElementById('navOverlay');
  var panel     = document.getElementById('navPanel');

  function openNav() {
    panel.classList.add('active');
    overlay.classList.add('active');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeNav() {
    panel.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', function() {
    if (panel.classList.contains('active')) closeNav(); else openNav();
  });
  overlay.addEventListener('click', closeNav);

  // Mobile sub-menu toggles
  document.querySelectorAll('.nav-panel-trigger').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var sub = btn.nextElementSibling;
      var isOpen = sub.classList.contains('open');
      // close all
      document.querySelectorAll('.nav-panel-sub').forEach(function(s) { s.classList.remove('open'); });
      document.querySelectorAll('.nav-panel-trigger').forEach(function(b) { b.classList.remove('open'); });
      if (!isOpen) {
        sub.classList.add('open');
        btn.classList.add('open');
      }
    });
  });
})();
