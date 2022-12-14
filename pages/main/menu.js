const menu_icon = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

menu_icon.addEventListener('click', () => {
    menu_icon.classList.toggle('active');
    menu.classList.toggle('active');
    console.log('clicked')
})