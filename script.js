const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.nav-right');

function openMenu(e) {
    // mobileNav.style.display = 'block';
    mobileNav.classList.toggle('hidden')
}



menuBtn.addEventListener('click', openMenu);