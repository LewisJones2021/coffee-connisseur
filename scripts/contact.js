/** @format */

// form validation
const form = document.querySelector('form');
const email = document.getElementById('email');
const error = email.nextElementSibling;
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// test if the fiel is empty, if not, check the input is valid.
window.addEventListener('load', () => {
 const fieldIsValid = email.value.length === 0 || emailRegExp.test(email.value);
 email.className = fieldIsValid ? 'valid' : 'invalid';
});

// if the email value is valid, appky a "valid" class and remove error message. If it's not valid, appliy an "invalid" class to the input field.
email.addEventListener('input', () => {
 const formIsValid = email.value.length === 0 || emailRegExp.test(email.value);
 if (formIsValid) {
  email.className = 'valid';
  error.textContent = '';
  error.className = 'error-message';
 } else {
  email.className = 'invalid';
 }
});

// adds a submit event listener to a form element and prevents the default form submission behavior. Check whether the email input value is valid. If the email value is not valid, display an error message to the user and apply relevant classes. If the email value is valid, remove any error messages and appliy the relevant class.
form.addEventListener('submit', (event) => {
 const formIsValid = email.value.length === 0 || emailRegExp.test(email.value);
 if (!formIsValid) {
  email.className = 'invalid';
  error.textContent = 'Please enter a valid email';
  error.className = 'error-message active';
  event.preventDefault();
 } else {
  email.className = 'valid';
  error.textContent = '';
  error.className = 'error-message';
 }
});
