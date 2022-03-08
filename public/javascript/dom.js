const carsDom = (cars) => {
  cars.forEach((car) => {
    const container = document.querySelector('.container');

    const card = document.createElement('div');
    const image = document.createElement('img');
    const title = document.createElement('h3');
    const type = document.createElement('p');
    const price = document.createElement('p');

    container.appendChild(card);

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(price);

    image.src = '#';
    title.textContent = car.name;
    type.textContent = car.type;
    price.textContent = car.price;
  });
};
