/** @format */

// fetch the data from the api url
const fetchData = fetch('https://api.sampleapis.com/coffee/hot')
 .then((response) => {
  if (response.ok) {
   return response.json();
  } else {
   throw new Error('error');
  }
 })
 .then((data) => {
  console.log(data);
  displayCoffeeData(data);
 })
 .catch((error) => {
  console.error('fetch error:', error);
 });

//function to render into the HTML
const displayCoffeeData = (coffee) => {
 const coffeeSection = document.querySelector('.recipe-section');
 coffee.forEach((item, index) => {
  const coffeeImage = coffeeSection.querySelectorAll('img');
  const getCoffeeImg = item.image;
  if (coffeeImage) {
   coffeeImage.innerHTML = getCoffeeImg;
  }

  const getCoffeeName = item.title;
  const heading = coffeeSection.querySelectorAll('h3')[index];
  if (heading) {
   heading.innerHTML = getCoffeeName;
  }
  const descriptionParagraph = coffeeSection.querySelectorAll('.coffee-description', 'p')[index];
  const getCoffeeDescription = item.description;

  if (descriptionParagraph) {
   descriptionParagraph.innerHTML = getCoffeeDescription;
  }

  const ingredientsParagraph = coffeeSection.querySelectorAll('.coffee-ingredients', 'p')[index];
  const getCoffeeIngredients = item.ingredients;
  if (ingredientsParagraph) {
   ingredientsParagraph.innerHTML = getCoffeeIngredients.join(', ');
  }
 });
};

// bean generator

const coffeeForm = document.getElementById('coffee-form');
const generateCoffeeButton = document.getElementById('generate-coffee-button');
const coffeeBeanResult = document.getElementById('coffee-result');

function generateCoffee() {
 // get the valeus from the users selected options.
 const roastType = document.getElementById('roast-type').value;
 const flavourNotes = document.getElementById('flavour-notes').value;
 const cofffeeType = document.getElementById('coffee-type').value;

 //  generate the coffee bean based on the selected options.
 let coffeeBean = '';
 if (roastType === 'light') {
  coffeeBean = 'light roast ';
 } else if (roastType === 'medium') {
  coffeeBean = 'medium roast ';
 } else if (roastType === 'dark') {
  coffeeBean = 'dark roast ';
 }

 if (cofffeeType === 'espresso') {
  coffeeBean += 'espresso ';
 } else if (cofffeeType === 'filter') {
  coffeeBean += 'filter coffee ';
 } else if (cofffeeType === 'pour-over') {
  coffeeBean += 'pour over ';
 }
 if (flavourNotes === 'fruity') {
  coffeeBean += 'with fruity notes';
 } else if (flavourNotes === 'chocolatey') {
  coffeeBean += 'with chocolatey notes';
 } else if (flavourNotes === 'nutty') {
  coffeeBean += 'with nutty notes';
 }
 //  displau the coffee bean.

 coffeeBeanResult.innerHTML = `Your perfect cup of coffee is a <span style="color:rgba(169, 93, 16, 0.872); font-weight:bold">${coffeeBean} </span>`;
}
generateCoffeeButton.addEventListener('click', generateCoffee);
