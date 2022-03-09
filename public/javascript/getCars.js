const container = document.querySelector('.container');
fetch('/cars')
  .then((res) => res.json())
  .then((cars) => {
      console.log(cars);
    cars.forEach((car) => {
      const card = document.createElement('div');
      const cardImg = document.createElement('img');
      const carName = document.createElement('h3');
      const type = document.createElement('p');
      const price = document.createElement('p');
      const addCartBtn = document.createElement('button');

      cardImg.src = car.image;
      carName.textContent = car.name;
      type.textContent = card.type;
      price.textContent = card.price;
      addCartBtn.textContent = 'Add To Cart';

      container.appendChild(card);
      card.appendChild(cardImg);
      card.appendChild(carName);
      card.appendChild(type);
      card.appendChild(price);
      card.appendChild(addCartBtn);
    });
  });
