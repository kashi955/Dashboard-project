const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu_bar');
const closeBtn = document.querySelector('#close_btn');
const themeToggler = document.querySelector('.theme-toggler');


// Menu Button
if (menuBtn && sideMenu) {
    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = "block";
    });
}


// Close Button
if (closeBtn && sideMenu) {
    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = "none";
    });
}


// Theme Toggler
if (themeToggler) {
    themeToggler.addEventListener('click', () => {

        document.body.classList.toggle('dark-theme-variables');

        const firstIcon = themeToggler.querySelector('span:nth-child(1)');
        const secondIcon = themeToggler.querySelector('span:nth-child(2)');

        if (firstIcon) {
            firstIcon.classList.toggle('active');
        }

        if (secondIcon) {
            secondIcon.classList.toggle('active');
        }
    });
}


// Logout Popup
function showLogoutPopup(event) {
    event.preventDefault();

    const popup = document.getElementById("logoutPopup");

    if (popup) {
        popup.style.display = "flex";
    }
}


function closeLogoutPopup() {
    const popup = document.getElementById("logoutPopup");

    if (popup) {
        popup.style.display = "none";
    }
}


function confirmLogout() {
    window.location.href = "admin dashboard project.html";
}