function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');

    // Check if the div has the 'close' class and update the src of the image
    if (menu.classList.contains('open')) {
        icon.querySelector('img').setAttribute('src', './assets/close.svg');
    } else {
        icon.querySelector('img').setAttribute('src', './assets/menu.svg');
    }
}