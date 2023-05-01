/** @format */

const mobileNavToggle = document.querySelector('i');
const menu = document.querySelector('.mobile-nav');
const body = document.querySelector('body');
const menuOverlay = document.getElementById('menu-overlay');

// highlight the current page link.
const currentLocation = window.location.pathname;

window.addEventListener('load', function () {
 const links = document.querySelectorAll('.header-nav a');
 links.forEach((link) => {
  if (link.href === window.location.href) {
   link.classList.add('active-page');
  }
 });
 const mobileLinks = document.querySelectorAll('.mobile-nav a');
 mobileLinks.forEach((link) => {
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
  menuOverlay.style.display = 'block';
 } else {
  menu.style.display = 'none';
  body.classList.remove('mobile-nav-open');
  menuOverlay.style.display = 'none';
 }
});

menuOverlay.addEventListener('click', () => {
 menu.style.display = 'none';
 body.classList.remove('mobile-nav-open');
 menuOverlay.style.display = 'none';
});

// image slider
const coffeeImgs = document.querySelectorAll('.slider img');
const sliderDots = document.querySelectorAll('.dot');

// index of the first image
let currentImg = 0;

function changeSlide(n) {
 // set images opacity to 0, remove 'active' class to reset the slide
 for (let s = 0; s < coffeeImgs.length; s++) {
  coffeeImgs[s].style.opacity = 0;
  sliderDots[s].classList.remove('active');
 }
 // update current img to the index of selected img
 currentImg = n;

 coffeeImgs[currentImg].style.opacity = 1;
 sliderDots[currentImg].classList.add('active');
}

//random coffee facts
//coffee facts array
const coffeeFacts = [
 "The 'coffee break' was invented by the owner of a coffee company in the early 20th century as a way to sell more coffee.",

 'The first webcam was invented at the University of Cambridge in 1991 so that researchers could monitor the level of a coffee pot from their desks.',

 "Coffee is the common man's gold, and like gold, it brings to every person the feeling of luxury and nobility.",

 'Coffee is the common denominator of all the geniuses of our time.',
];

const factPlaceholder = document.getElementById('coffee-fact');
const showCoffeeFact = document.getElementById('show-fact');

function randomCoffeeFacts() {
 const factNumber = Math.floor(Math.random() * coffeeFacts.length);
 factPlaceholder.textContent = coffeeFacts[factNumber];
}
if (showCoffeeFact) {
 showCoffeeFact.addEventListener('click', () => {
  console.log('Button clicked!');
  randomCoffeeFacts();
 });
}
