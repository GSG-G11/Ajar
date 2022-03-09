const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('#login');
const errorMessage = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputData = { email: email.value, password: password.value };
  fetch('/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputData),
  }).then((res) => res.json())
    .then((results) => {
      if (results.redirect) {
        window.location = './cars.html';
      } else {
        errorMessage.textContent = results.msg;
      }
    });
});
