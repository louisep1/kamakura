const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('.nav-right');

const destinationsBtn = document.querySelector('.destinations-dropdown');
const destinations = document.querySelectorAll('.destinations-dropdown-content li');

const interestsBtn = document.querySelector('.interests-dropdown');
const interests = document.querySelectorAll('.interests-dropdown-content li');

const hotBtn = document.querySelector('.hot-dropdown');
const hot = document.querySelectorAll('.hot-dropdown-content li');

function openMenu(e) {
    // mobileNav.style.display = 'block';
    mobileNav.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll'); /* we created a no-scroll class in css to hide the hidden content in .hidden */

    for(let i = 0; i< destinations.length; i++) {
        destinations[i].style.display = 'none';
    }
    for(let i = 0; i< interests.length; i++) {
        interests[i].style.display = 'none';
    }
    for(let i = 0; i< hot.length; i++) {
        hot[i].style.display = 'none';
    }
}

function openDestinations(e) {
    for(let i = 0; i< destinations.length; i++) {
        destinations[i].style.display = 'block';
    }
    for(let i = 0; i< interests.length; i++) {
        interests[i].style.display = 'none';
    }
    for(let i = 0; i< hot.length; i++) {
        hot[i].style.display = 'none';
    }
}

function openInterests(e) {
    for(let i = 0; i< interests.length; i++) {
        interests[i].style.display = 'block';
    }
    for(let i = 0; i< destinations.length; i++) {
        destinations[i].style.display = 'none';
    }
    for(let i = 0; i< hot.length; i++) {
        hot[i].style.display = 'none';
    }
}

function openHot(e) {
    for(let i = 0; i< hot.length; i++) {
        hot[i].style.display = 'block';
    }
    for(let i = 0; i< destinations.length; i++) {
        destinations[i].style.display = 'none';
    }
    for(let i = 0; i< interests.length; i++) {
        interests[i].style.display = 'none';
    }
}




menuBtn.addEventListener('click', openMenu);

destinationsBtn.addEventListener('click', openDestinations);
interestsBtn.addEventListener('click', openInterests);
hotBtn.addEventListener('click', openHot);