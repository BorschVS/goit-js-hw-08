const throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('form input[name=email]'),
  textarea: document.querySelector('form textarea'),
};

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};

populateTextarea();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const jsonFormData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, jsonFormData);
}

function populateTextarea() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);

  if (savedFormData) {
    const parsedFormData = JSON.parse(savedFormData);
    refs.email.value = parsedFormData.email ?? '';
    refs.textarea.value = parsedFormData.message ?? '';

    console.log(parsedFormData);
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData.email = '';
  formData.message = '';
}
