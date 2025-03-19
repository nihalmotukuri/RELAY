const navbar = document.getElementById('navbar')
const navToggle = document.getElementById('navToggle');
const navDropdown = document.getElementById('navDropdown');
const header = document.getElementById('header')

navToggle.onclick = function() {
    header.classList.toggle('nav-toggle-styles');
    navDropdown.classList.toggle('hidden')
}


window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('onscroll-header-styles');
    } else if (window.scrollY === 0) {
        header.classList.remove('onscroll-header-styles')
    }
})