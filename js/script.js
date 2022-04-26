const submenu = document.querySelector('.submenu-position');
const menu = document.querySelector('.submenu');
const menu_toggle = document.querySelector('.menu-toggle');
const close = document.querySelector('.close');
const toggle = document.querySelector('.toggle');


// On toggle click activate menu
toggle.addEventListener('click', (e) => {
    menu_toggle.classList.add('active');
    close.classList.add('active');
});

close.addEventListener('click', (e) => {
    menu.classList.remove('active');
    close.classList.remove('active');
});



//On Mouse hover activate submenu

submenu.addEventListener('mouseover', (e) => {
    menu.classList.add('active');
});


submenu.addEventListener('mouseout', (e) => {
    menu.classList.remove('active');
});

