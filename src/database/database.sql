create database ecommerce;

create table if not exists products (
    id serial primary key,
    name varchar(255) not null unique,
    description varchar(255),
    value float not null,
    category_id int references categories (id)
);

create table if not exists categories (
    id serial primary key,
    name varchar(255) not null unique
);