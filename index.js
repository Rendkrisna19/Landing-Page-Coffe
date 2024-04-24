//togle class active
const navbarnav = document.querySelector('.navbar-nav');
//ketika hambuerger di klik 
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};