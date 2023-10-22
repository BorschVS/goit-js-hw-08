var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('form input[name=email]'),
  textarea: document.querySelector('form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateTextarea(formData);

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  const jsonFormData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, jsonFormData);
}

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);
  const parseMessage = JSON.parse(savedMessage);

  console.log(parseMessage);

  if (parseMessage.email) {
    refs.form.email.value = parseMessage.email;
  }
  if (parseMessage.message) {
    refs.textarea.value = parseMessage.message;
  }
}
