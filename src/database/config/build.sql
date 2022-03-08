BEGIN;

DROP TABLE IF EXISTS users, carts, cars cascade;

CREATE TABLE users (
    id serial primary key,
    username varchar(128) not null,
    email varchar(56) unique not null,
    password varchar(200) not null
);
CREATE TABLE carts (
    id serial primary key,
    user_id int references users(id)  
);
CREATE TABLE cars (
    id serial primary key,
    name varchar(128) not null,
    type varchar(56) not null,
    price int not null,
    cart_id int references carts(id)
);

COMMIT;