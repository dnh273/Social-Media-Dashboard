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

sr.reveal(`.header__title`)
sr.reveal(`.header__subtitle`, { delay: 500 })
sr.reveal(`.darkMode`, { delay: 600 })
sr.reveal(`.dashboard`, { delay: 700 })
sr.reveal(`.overview__title`, { interval: 100, delay: 700 })
sr.reveal(`.overview`, { delay: 800 })
sr.reveal(`.attribution`, { delay: 900 })
sr.reveal(`.filters`, { delay: 1000 })
