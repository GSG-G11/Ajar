fetch('/myCart')
  .then((res) => res.json())
  .then((carts) => {
    const container = document.querySelector('.container');
    carts.forEach((cart) => {
      const cartRow = document.createElement('div');
      const carName = document.createElement('h3');
      const deleteBtn = document.createElement('button');

      carName.textContent = cart.name;
      deleteBtn.textContent = 'Delete';

      container.appendChild(cartRow);
      cartRow.appendChild(carName);
      cartRow.appendChild(deleteBtn);
    });
  });
