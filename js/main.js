const button = document.querySelector('.header-burger-button');
const menu = document.querySelector('.header-menu-list');
const menuLinks = document.querySelectorAll('.header-menu-link');

button.addEventListener('click', () => {
    button.classList.toggle('active');

    if (button.classList.contains('active')) {
        button.setAttribute('aria-expanded', 'true');
        menu.setAttribute('aria-hidden', 'false');
        menuLinks.forEach(link => link.setAttribute('tabindex', '0'));
    } else {
        button.setAttribute('aria-expanded', 'false');
        menu.setAttribute('aria-hidden', 'true');
        menuLinks.forEach(link => link.setAttribute('tabindex', '-1'));
    }
});


openBtn.addEventListener('click', () => {
    modal.showModal();
});
modal.addEventListener('click', (e) => {
    const modal = e.currentTarget;
    const isClickOnBackDrop = e.target == modal

    if (isClickOnBackDrop) {
        modal.close();
    }
});
closeBtn.addEventListener('click', () => {
    modal.close();
});

