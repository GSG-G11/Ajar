const container = document.querySelector('.container');
const userName = document.querySelector('#cookies');
fetch('/cars')
  .then((res) => res.json())
  .then((cars) => {
    const container = document.querySelector('.container');
    cars.forEach((car) => {
      const card = document.createElement('div');
      const cardImg = document.createElement('img');
      const carName = document.createElement('h3');
      const type = document.createElement('p');
      const price = document.createElement('p');
      const addCartBtn = document.createElement('button');

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
if (!getCookie('name')) {
  window.location = './signin.html';
} else {
  userName.textContent = getCookie('name');
  fetch('/cars')
    .then((res) => res.json())
    .then((cars) => {
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
}
