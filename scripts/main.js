/** @format */
const mobileNavToggle = document.querySelector('i');
const menu = document.querySelector('.mobile-nav');
const body = document.querySelector('body');
const menuOVerlay = document.getElementById('menu-overlay');

// highlight the current page link.
const currentLocation = window.location.pathname;

window.addEventListener('load', function () {
 const links = document.querySelectorAll('.header-nav a');
 links.forEach((link) => {
  if (link.href === window.location.href) {
   link.classList.add('active-page');
  }
 });
});

// toggle the mobile menu.
mobileNavToggle.addEventListener('click', () => {
 if (menu.style.display === 'none') {
  menu.style.display = 'block';
  body.classList.add('mobile-nav-open');
  menuOVerlay.style.display = 'block';
 } else {
  menu.style.display = 'none';
  body.classList.remove('mobile-nav-open');
  menuOVerlay.style.display = 'none';
 }
});

menuOVerlay.addEventListener('click', () => {
 menu.style.display = 'none';
 body.classList.remove('mobile-nav-open');
 menuOVerlay.style.display = 'none';
});
