const menu = document.getElementById('menu');
const menuContent = document.getElementById('menu-content');

menu.addEventListener('click', (e) => {
    e.preventDefault();
    toggleMainMenu(menu, menuContent);
});

// toggle the menu visibility when the menu items are clicked
document.querySelectorAll('.menu-content-link').forEach(link => {
    link.addEventListener('click', (e) => {
        toggleMainMenu(menu, menuContent);
    });
});

// close the menu when the ESC key is pressed
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        if (menu && menu.classList.contains('open')) {
            menu.classList.remove('open');
            menuContent.classList.remove('active');
        }
    }
});

// toggle the menu visibility
function toggleMainMenu(mainMenu, mainMenuContent) {
    mainMenu.classList.toggle('open');
    mainMenuContent.classList.toggle('active');
}

// close the menu if clicked outside its area
window.addEventListener('click', function(event) {
    if (menuContent.classList.contains('active')
        && !menu.contains(event.target) && !menuContent.contains(event.target)) {
            menu.classList.remove('open');
            menuContent.classList.remove('active');
    }
});