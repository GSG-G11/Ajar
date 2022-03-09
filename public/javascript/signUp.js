const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('#signup');
const errorMessage = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  console.log('saleh');
  e.preventDefault();
  const inputData = { username: username.value, email: email.value, password: password.value };
  fetch('/signup', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputData),
  }).then((res) => res.json())
    .then((results) => {
      if (results.redirect) {
        window.location = '/html/cars.html';
      } else {
        errorMessage.textContent = results.msg;
      }
    });
});
