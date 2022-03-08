fetch('/login')
  . then((data) => res.json(data))
  . then((cars) => {
    carsDom(cars);
  });
