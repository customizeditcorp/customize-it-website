document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-nav-toggle]');
  const menu = document.querySelector('[data-nav-menu]');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.hidden = expanded;
    });

    // Ensure menu starts collapsed on small screens
    menu.hidden = window.innerWidth < 901;
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 901) {
        menu.hidden = false;
        toggle.setAttribute('aria-expanded', 'true');
      } else if (toggle.getAttribute('aria-expanded') === 'false') {
        menu.hidden = true;
      }
    });
  }
});
