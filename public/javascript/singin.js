const email = document.querySelector('.email');
const password = document.querySelector('.password');
const form = document.querySelector('#login');
const errorMessage = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputData = { email: email.value, password: password.value };
  console.log(email.value);
  console.log(password.value);
  fetch('/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputData),
  }).then((res) => {
    if (res.status === 200) {
      window.location = '/';
    } else {
      res.json().then((results) => {
        errorMessage.textContent = results.msg;
      });
    }
  });
});
