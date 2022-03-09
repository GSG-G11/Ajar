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

      const getCookie = (cname) => {
        const name = `${cname}=`;
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i += 1) {
          let c = ca[i];
          while (c.charAt(0) === ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
          }
        }
        return '';
      };

      const cookies = document.cookie;
      console.log(cookies.split());
      const userName = document.querySelector('#cookies');
      userName.textContent = getCookie('name');
    });
  });
