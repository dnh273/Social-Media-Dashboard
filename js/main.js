// LIGT MODE
const themeButton = document.querySelector('#checkbox');

themeButton.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('lightMode');
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

