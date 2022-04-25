const submenu = document.querySelector('.submenu-position');
const menu = document.querySelector('.submenu');

// submenu.addEventListener('click', (e) => {
//     console.log('click');
//     menu.classList.add('active');
// });


submenu.onmouseover = function () {
    menu.classList.add('active');
}

submenu.onmouseout = function () {
    menu.classList.remove('active');
}