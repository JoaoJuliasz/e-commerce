create database ecommerce;

create table if not exists products (
    id serial primary key,
    name varchar(255) not null unique,
    description varchar(255),
    value float not null,
    image varchar(255) not null,
    category_id int references categories (id)
);

create table if not exists categories (
    id serial primary key,
    name varchar(255) not null unique
);

create table if not exists users (
    id serial primary key,
    name varchar(255) not null,
    password varchar(50) not null,
    creationDate timestamp not null,
    birthDay timestamp not null,
    avatar varchar(255) not null,
    email varchar(255) not null unique
)

-- create table if not exists products_rating (
--     id serial primary key,
--     comments varchar(500),
--     value decimal(4, 2)
--     product_id int references products (id)
-- )

create table if not exists products_history (
    id serial primary key,
    visit_date timestamp not null,
    product_id int references products (id),
    user_id int references users (id)
)

create table if not exists user_favorites(
    id serial primary key,
    favorite_date bigint not null,
    product_id int references products (id),
    user_id int references users (id)
);