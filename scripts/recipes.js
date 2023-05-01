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
