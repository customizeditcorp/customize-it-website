document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('[data-toggle-nav]');
  const menu = document.querySelector('[data-menu]');
  const cta = document.querySelector('[data-menu-cta]');

  if (toggle && menu && cta) {
    toggle.addEventListener('click', () => {
      const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isExpanded));
      menu.classList.toggle('is-open');
      cta.classList.toggle('is-open');
    });
  }
});
