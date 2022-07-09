(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header__menu-btn'),
    closeMenuBtn: document.querySelector('.mob-menu__close'),
    menu: document.querySelector('.mob-menu'),
    body: document.querySelector('body'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('visually-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();