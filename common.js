const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        nav.classList.toggle('is-active');
    });
}