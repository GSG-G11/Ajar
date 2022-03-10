const addToCarBtn = document.querySelector('.addToCartBtn');

addToCarBtn.addEventListener('click', () => {
  fetch('/addToCart', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(id, user_id),
  })
    .then((res) => res.json())
    .then((cars) => {
      addToCarBtn.disabled = true;
    });
});
